import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
  StyleSheet,
} from 'react-native';
import styles from "./SegmentedControl.styles"

export interface SegmentedControlOption {
  label: string;
  value: string;
}

interface SegmentedControlProps {
  /** Список опций */
  options: SegmentedControlOption[];
  /** Текущее выбранное значение */
  value: string;
  /** Вызывается при клике */
  onChange: (value: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
}) => {
  // хранит замеры x и width для каждой опции
  const [layouts, setLayouts] = useState<{ x: number; width: number }[]>(
    []
  );

  // Animated значения для ползунка
  const animLeft = useRef(new Animated.Value(0)).current;
  const animWidth = useRef(new Animated.Value(0)).current;

  // Сохраняем layout при отрисовке каждой опции
  const onItemLayout = (i: number) => (e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    setLayouts(prev => {
      const next = [...prev];
      next[i] = { x, width };
      return next;
    });
  };

  // При изменении value или layouts анимируем ползунок
  useEffect(() => {
    const idx = options.findIndex(o => o.value === value);
    if (idx >= 0 && layouts[idx]) {
      Animated.parallel([
        Animated.timing(animLeft, {
          toValue: layouts[idx].x,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(animWidth, {
          toValue: layouts[idx].width,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [value, layouts]);

  return (
    <View style={styles.container}>
      {/** Фон-линию рисуем фоном контейнера */}
      <View style={styles.baseLine} />

      {options.map((opt, i) => (
        <TouchableOpacity
          key={opt.value}
          style={styles.item}
          onPress={() => onChange(opt.value)}
          onLayout={onItemLayout(i)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.text,
              opt.value === value && styles.textActive,
            ]}
          >
            {opt.label}
          </Text>
        </TouchableOpacity>
      ))}

      {/** Анимированный ползунок */}
      <Animated.View
        style={[
          styles.slider,
          {
            left: animLeft,
            width: animWidth,
          },
        ]}
      />
    </View>
  );
};

export default SegmentedControl;
