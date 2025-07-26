import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface IconProps {
  size?: number;
  color?: string;
}

const FilterIcon: React.FC<IconProps> = ({
  size = 24,
  color = '#767982',
}) => (
  <Svg
    width={size}
    height={(25 / 24) * size}
    viewBox="0 0 24 25"
    fill="none"
  >
    <Path
      d="M20 7.51904H11M14 17.519H5M14 17.519C14 19.1759 15.3431 20.519 17 20.519C18.6569 20.519 20 19.1759 20 17.519C20 15.8622 18.6569 14.519 17 14.519C15.3431 14.519 14 15.8622 14 17.519ZM10 7.51904C10 9.1759 8.65685 10.519 7 10.519C5.34315 10.519 4 9.1759 4 7.51904C4 5.86219 5.34315 4.51904 7 4.51904C8.65685 4.51904 10 5.86219 10 7.51904Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FilterIcon;
