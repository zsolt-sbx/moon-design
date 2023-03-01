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
      d="M4 22.085a.5.5 0 000 1v-1zm2.732.5l.01-.5h-.01v.5zm9.22-7.317l-.451-.216.45.216zM4 9.502a.5.5 0 100 1v-1zm2.732.5v.5h.01l-.01-.5zm10.776 8.806a.5.5 0 10-.772.635l.772-.635zm-4.258-4.88a.5.5 0 10.772-.636l-.772.636zM4 23.085h2.732v-1H4v1zm2.72 0c1.18.027 2.816-.224 4.557-1.32 1.74-1.096 3.554-3.017 5.125-6.28l-.901-.433c-1.506 3.127-3.205 4.89-4.756 5.867-1.551.976-2.987 1.19-4.002 1.167l-.022 1zm9.682-7.6c.8-1.662 3.28-4.985 8.135-4.985v-1c-5.389 0-8.145 3.702-9.036 5.552l.9.433zm8.135-4.985H28v-1h-3.463v1zM4 10.502h2.732v-1H4v1zm20.537 12.585H28v-1h-3.463v1zm-7.801-3.644c1.439 1.75 3.952 3.644 7.8 3.644v-1c-3.477 0-5.728-1.698-7.028-3.28l-.772.636zm-9.993-8.941c1.533-.035 4.068.467 6.507 3.426l.772-.636c-2.652-3.218-5.492-3.83-7.301-3.79l.022 1z"
      fill="currentColor"
    />
    <path
      d="M24.771 6.79l3.172 3.172-3.172 3.285M24.771 19.359l3.172 3.172-3.172 3.285"
      stroke="currentColor"
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
const ArrowsCrossLines =
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
export default ArrowsCrossLines;
