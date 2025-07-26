import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
  Dimensions,
  PanResponder,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import styles from './Calendar.styles';
import { COLOR_MAP, MONTH_NAMES, WEEK_DAYS } from '../../constants/Text/CalendarText';

type ColorName = keyof typeof COLOR_MAP;

export interface HighlightDate {
  day: number;    // 1–31
  month: number;  // 1–12
  year: number;
  color: ColorName;
}

export interface CalendarProps {
  /** Даты для подсветки */
  highlightDates?: HighlightDate[];
  /** Сколько месяцев держать «в буфере» (должно быть нечётным) */
  bufferMonths?: number;
  /** Коллбэк: когда сменился центральный месяц */
  onMonthChange?: (year: number, month: number) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/** Сдвинуть {year,month} на delta месяцев */
function addMonth(ym: { year:number; month:number }, delta: number) {
  let m = ym.month + delta, y = ym.year;
  while (m < 0) { m += 12; y--; }
  while (m > 11){ m -= 12; y++; }
  return { year: y, month: m };
}

const Calendar: React.FC<CalendarProps> = ({
  highlightDates = [],
  bufferMonths = 5,
  onMonthChange,
}) => {
  // центр буфера
  const half = Math.floor(bufferMonths / 2);

  // текущее окно месяцев [m-2, m-1, m, m+1, m+2]
  const today = { year: new Date().getFullYear(), month: new Date().getMonth() };
  const makeWindow = (center: typeof today) =>
    Array(bufferMonths)
      .fill(0)
      .map((_, i) => addMonth(center, i - half));

  const [monthsWindow, setMonthsWindow] = useState(makeWindow(today));
  const [viewWidth, setViewWidth] = useState(SCREEN_WIDTH);

  // всегда центрируем текущий месяц по -(viewWidth*half)
  const offsetX = useRef(new Animated.Value(-SCREEN_WIDTH * half)).current;
  const panX    = useRef(new Animated.Value(0)).current;

  // при ресайзе
  useEffect(() => {
    offsetX.setValue(-viewWidth * half);
  }, [viewWidth, half, offsetX]);

  // перестраиваем окно месяцев
  const applyMonth = (dir: -1|1) => {
    setMonthsWindow(w => {
      const next = dir === 1
        ? [...w.slice(1), addMonth(w[w.length - 1], 1)]
        : [addMonth(w[0], -1), ...w.slice(0, w.length - 1)];
      // зовём коллбэк с новым центральным
      const center = next[half];
      onMonthChange?.(center.year, center.month);
      return next;
    });
    // сразу центрируем
    offsetX.setValue(-viewWidth * half);
  };

  // анимированные перелистывания
  const goNext = () => {
    Animated.timing(panX, {
      toValue: -viewWidth,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      panX.setValue(0);
      applyMonth(1);
    });
  };
  const goPrev = () => {
    Animated.timing(panX, {
      toValue: viewWidth,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      panX.setValue(0);
      applyMonth(-1);
    });
  };

  // свайпы
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gs) =>
        Math.abs(gs.dx) > 5 && Math.abs(gs.dy) < 20,
      onPanResponderGrant: () => panX.setValue(0),
      onPanResponderMove: Animated.event(
        [null, { dx: panX }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gs) => {
        const threshold = 50;
        if (gs.dx < -threshold) goNext();
        else if (gs.dx > threshold) goPrev();
        else Animated.spring(panX, { toValue: 0, useNativeDriver: false }).start();
      }
    })
  ).current;

  // генерим 5×7 ячеек для одного месяца
  const makeMonthCells = (ym: { year:number; month:number }) => {
    const dow0      = new Date(ym.year, ym.month, 1).getDay(); // 0=вс
    const shift     = (dow0 + 6) % 7;                          // 0=пн
    const daysCurr  = new Date(ym.year, ym.month + 1, 0).getDate();
    const daysPrev  = new Date(ym.year, ym.month, 0).getDate();
    const cells: { day:number; inCurrent:boolean }[] = [];

    // дни предыдущего
    for (let i = 0; i < shift; i++) {
      cells.push({ day: daysPrev - shift + 1 + i, inCurrent: false });
    }
    // текущего
    for (let d = 1; d <= daysCurr; d++) {
      cells.push({ day: d, inCurrent: true });
    }
    // следующего до 35
    let nd = 1;
    while (cells.length < 35) {
      cells.push({ day: nd++, inCurrent: false });
    }
    // разбиваем на 5 строк по 7
    return Array(5).fill(0).map((_, i) => cells.slice(i*7, i*7 + 7));
  };

  // получить цвет подсветки для данной ячейки
  const getHighlight = (
    day: number,
    ym: { year:number; month:number }
  ): string|undefined => {
    if (!ym) return undefined;
    const found = highlightDates.find(h =>
      h.day === day &&
      h.year === ym.year &&
      h.month === ym.month + 1
    );
    return found ? COLOR_MAP[found.color] : undefined;
  };

  // центральный месяц для шапки
  const centerYM = monthsWindow[half];

  return (
    <View
      style={styles.wrapper}
      onLayout={(e: LayoutChangeEvent) =>
        setViewWidth(e.nativeEvent.layout.width)
      }
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goPrev} style={styles.navBtn}>
            <View style={styles.iconChevron}>
                <ChevronLeft size={24} color="#282B33" />
            </View>
        </TouchableOpacity>
        <View style={styles.textCont}>
          <Text style={styles.headerTitle}>
            {MONTH_NAMES[centerYM.month]}
          </Text>
          <Text style={styles.headerYear}> {centerYM.year}</Text>
        </View>
        <TouchableOpacity onPress={goNext} style={styles.navBtn}>
            <View style={styles.iconChevron}>
                <ChevronRight size={24} color="#282B33" />
            </View>
        </TouchableOpacity>
      </View>

      {/* Дни недели */}
      <View style={styles.weekDaysRow}>
        {WEEK_DAYS.map(d => (
          <Text key={d} style={styles.weekDay}>{d}</Text>
        ))}
      </View>

      {/* СЛАЙДЕР */}
      <View
        style={[styles.sliderMask, { width: viewWidth }]}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={{
            flexDirection: 'row',
            width: viewWidth * bufferMonths,
            transform: [{ translateX: Animated.add(offsetX, panX) }],
          }}
        >
          {monthsWindow.map((ym, wi) => (
            <View key={wi} style={{ width: viewWidth }}>
              {makeMonthCells(ym).map((week, wj) => (
                <View key={wj} style={styles.weekRow}>
                  {week.map((cell, di) => {
                    const bg = getHighlight(cell.day, ym);
                    return (
                      <View
                        key={di}
                        style={[
                          styles.dayCell,
                          bg && { backgroundColor: bg, borderRadius: 8 },
                        ]}
                      >
                        <Text
                          style={[
                            cell.inCurrent
                              ? styles.dayText
                              : styles.otherDayText,
                            bg && { color: '#fff' },
                          ]}
                        >
                          {cell.day}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              ))}
            </View>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Calendar;
