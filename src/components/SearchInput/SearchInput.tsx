// src/components/SearchInput/SearchInput.tsx
import React, { useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInputProps,
} from 'react-native';

import { styles } from './SearchInput.styles';
import SearchIcon from '../../../assets/icons/SearchIcon';
import FilterIcon from '../../../assets/icons/FilterIcon';

export interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  /** Показывать кнопку фильтров */
  hasFilters?: boolean;
  /** Обработчик нажатия на кнопку фильтров */
  onFilterPress?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Поиск',
  hasFilters = false,
  onFilterPress,
  style,
  ...rest
}) => {
  const inputRef = useRef<TextInput>(null);

  const handleFilterPress = () => {
    // При нажатии на фильтры — тоже снимаем фокус и вызываем callback
    inputRef.current?.blur();
    onFilterPress?.();
  };

  return (

      <View style={[styles.container, style]}>
        <SearchIcon />

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#767982"
          {...rest}
        />

        {hasFilters && (
          <TouchableOpacity
            onPress={handleFilterPress}
            style={styles.filterBtn}
          >
            <FilterIcon />
          </TouchableOpacity>
        )}
      </View>
  );
};

export default SearchInput;  

