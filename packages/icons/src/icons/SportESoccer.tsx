import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.479 11.732s-1.02 2.306-1.175 3.77c0 0 1.419 1.906 2.727 3.037l3.967-.865s.72-1.26 1.023-2.943m-6.542-3c-1.168-1.189-2.676-1.677-2.676-1.677m2.676 1.678a15.517 15.517 0 013.157-.796M12.48 6.832s-1.307 1.537-1.677 3.222m0 0s-2.17 1.143-2.82 2.634c0 0-.106 1.582.81 3.383l3.51-.571m-3.51.573s-.99 1.756-.71 3.338c0 0 .858 2.261 2.601 3.104 0 0 1.655.103 3.459-.577 0 0 .517-2.616.887-3.4m-8.698-6.11s.595-.053 1.646.08m-1.761 6.914l1.817-.125m2.651 3.218s-.267.847-.095 2m3.554-2.577s2.04 1.345 3.222 1.434m0 0s2.32-1.005 3-2.558m-3 2.558s.045 1.486-.11 2.147m3.11-4.704s-.753-2.291-1.366-3.142m1.367 3.142c3.4-.503 3.946-4.434 3.946-4.434-.088-.65-.366-1.017-.565-1.467m-1.077 4.768s.5.847.22 2.313M16.637 6.518A9.65 9.65 0 005.62 16.073c0 5.33 4.32 9.65 9.65 9.65a9.651 9.651 0 009.56-10.992m-4.414-6.796c0 1.893 1.129 3.212 2.963 3.212.976 0 1.962-.187 2.86-1.31m-5.823-1.902c0-1.893 1.129-3.191 2.963-3.191s3.001 1.298 3.001 3.19h-5.964z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportESoccer =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportESoccer;
