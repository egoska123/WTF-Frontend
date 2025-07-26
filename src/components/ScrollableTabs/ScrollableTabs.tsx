// src/components/ScrollableTabs/ScrollableTabs.tsx
import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './ScrollableTabs.style';

export interface TabOption {
  label: string;
  value: string;
}

export interface ScrollableTabsProps {
  /** Список вкладок */
  options: TabOption[];
  /** Текущее активное значение */
  activeValue: string;
  /** Колбек при переключении */
  onChange: (value: string) => void;
  /** Не использовать дополнительные стили здесь — они вынесены в ScrollableTabs.styles.ts */
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
  options,
  activeValue='all',
  onChange,
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
  >
    {options.map(opt => {
      const isActive = opt.value === activeValue;
      return (
        <TouchableOpacity
          key={opt.value}
          style={[styles.tab, isActive && styles.tabActive]}
          activeOpacity={0.7}
          onPress={() => onChange(opt.value)}
        >
          <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>
            {opt.label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

export default ScrollableTabs;
