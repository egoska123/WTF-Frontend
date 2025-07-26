// src/components/icons/IconWindow.tsx
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface IconWindowProps extends SvgProps {
  /** Размер иконки (ширина) в пикселях */
  size?: number;
  /** Цвет заливки иконки */
  color?: string;
}

const IconChat: React.FC<IconWindowProps> = ({
  size = 24,
  color = '#000',
  ...props
}) => {
  // Соотношение высоты к ширине в исходном SVG: 25/24
  const height = (size * 25) / 24;

  return (
    <Svg
      width={size}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <Path
        d="M5 18.519V22.285L6.515 21.376L11.277 18.519H16C17.103 18.519 18 17.622 18 16.519V8.51904C18 7.41604 17.103 6.51904 16 6.51904H4C2.897 6.51904 2 7.41604 2 8.51904V16.519C2 17.622 2.897 18.519 4 18.519H5ZM4 8.51904H16V16.519H10.723L7 18.753V16.519H4V8.51904Z"
        fill={color}
      />
      <Path
        d="M20 2.51904H8C6.897 2.51904 6 3.41604 6 4.51904H18C19.103 4.51904 20 5.41604 20 6.51904V14.519C21.103 14.519 22 13.622 22 12.519V4.51904C22 3.41604 21.103 2.51904 20 2.51904Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconChat;
