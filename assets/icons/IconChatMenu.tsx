// src/components/IconFolder.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface IconFolderProps {
  /** Размер иконки (ширина и высота) */
  size?: number;
  /** Цвет заливки */
  color?: string;
}

const IconChatMenu: React.FC<IconFolderProps> = ({
  size = 37,
  color = '#767982',
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 37 37"
    fill="none"
  >
    <Path
      d="M7.83334 27.519V33.168L10.1058 31.8045L17.2488 27.519H24.3333C25.9878 27.519 27.3333 26.1735 27.3333 24.519V12.519C27.3333 10.8645 25.9878 9.51904 24.3333 9.51904H6.33334C4.67884 9.51904 3.33334 10.8645 3.33334 12.519V24.519C3.33334 26.1735 4.67884 27.519 6.33334 27.519H7.83334ZM6.33334 12.519H24.3333V24.519H16.4178L10.8333 27.87V24.519H6.33334V12.519Z"
      fill={color}
    />
    <Path
      d="M30.3333 3.51904H12.3333C10.6788 3.51904 9.33334 4.86454 9.33334 6.51904H27.3333C28.9878 6.51904 30.3333 7.86454 30.3333 9.51904V21.519C31.9878 21.519 33.3333 20.1735 33.3333 18.519V6.51904C33.3333 4.86454 31.9878 3.51904 30.3333 3.51904Z"
      fill={color}
    />
  </Svg>
);

export default IconChatMenu;
