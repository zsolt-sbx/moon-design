import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 22l2.929-1.111.024-.009L9 19l-3 3z" fill="#ECA51C" />
    <path
      d="M22.563 11.145a9.104 9.104 0 00-1.428-2.64l.892-2.475-2.388 2.534 1.482-.046-1.673.205h-.08v-.1h-.099v-.072l.251-1.663a9.017 9.017 0 00-2.646-1.426 9.108 9.108 0 00-5.728 0 8.857 8.857 0 00-2.647 1.439l-2.487-.898 2.6 2.45-.046-1.565.231 1.624v.105h-.106v.106H8.58l-1.614-.244 1.415.052L6.012 6.03l.893 2.475a8.826 8.826 0 00-1.442 2.64 9.05 9.05 0 000 5.716 8.826 8.826 0 001.442 2.64l-.886 2.443 2.388-2.495-1.489.046 1.568-.211h.08v.099h.105v.079l-.25 1.657a9.135 9.135 0 002.645 1.425 9.234 9.234 0 005.729 0 9.167 9.167 0 002.646-1.419h-.066c.099 0 .099-.046.092-.066v-.402c0-.152 0-.304-.033-.456-.033-.152-.06-.455-.092-.66l-.086-.079.06-.053v-.092h.112v-.1h.06c.25.067.509.126.76.179l.417.066.205.033h.159s.033 0 .066-.092v.112a8.825 8.825 0 001.442-2.64 9.05 9.05 0 000-5.716l.026-.014zm-6.383 1.116c0-.37-.82-1.175-.82-1.175l-1.76.053-1.198.706c-.595 1.597.43 2.119.43 2.119l.622-.403a.662.662 0 01-.417-.594c0-.488.662-.515 1.264-.356.602.158.946 1.366.926 1.98-.02.614-.926 1.05-.926 1.05h-.443a1.743 1.743 0 01-2.276-.318L10.26 13.41l-.185-1.597.1-.753.694-.23.588-.786 2.018-1.195.12.198.383.185.51-.297 2.222.838 1.323 1.77.53 1.67-.173 1.98-.767 1.67-.662.389-.099.435-1.574.727h-1.013l-1.164.316-2.136-.66-.318-.462s3.063-1.181 4.134-1.67a2.229 2.229 0 001.27-1.38l.259-.131s-.1-1.789-.133-2.165h-.006z"
      fill="#ECA51C"
    />
    <path
      d="M19.055 7.124h.015L19 9l2.992-2.992L22 6l-2.945 1.124zM21.852 21.846l-.204-.215-.418-.428-.82-.857A42.332 42.332 0 0019 19V20.8s0 .051.131.069H19L22 22a.088.088 0 00-.021-.058.081.081 0 00-.053-.028l-.073-.068z"
      fill="#ECA51C"
    />
    <path
      d="M20.872 19.06h-.458c-.172 0-.343-.04-.515-.048-.3-.016-.6-.016-.899 0 .474.527.948 1.045 1.439 1.555l.817.81.409.413.204.202h.05a.108.108 0 00.081 0l-.9-2.43-.163-.46v.129c-.024-.17-.049-.17-.065-.17zM23.327 13.88L27 14l-4-3c.208.937.318 1.906.327 2.88z"
      fill="#ECA51C"
    />
    <path
      d="M23.013 14.101a9.299 9.299 0 01-.355 2.409L27 13.975l-3.987.126zM13.9 4.993L14 1l-2.535 4.348A9.19 9.19 0 0114 4.993h-.101zm.101 0a9.19 9.19 0 012.485.355L14 1l.101 3.993H14zM14 27l2.535-4.342a9.38 9.38 0 01-2.408.355L14 27zm-2.535-4.342L14 27l-.101-3.987a9.383 9.383 0 01-2.434-.355zM5.342 11.465L1 14l3.987-.101c.01-.824.13-1.642.355-2.434zM1 14l4.342 2.535a9.299 9.299 0 01-.355-2.408L1 14z"
      fill="#ECA51C"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsHearthstone =
  styled(Svg) <
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
export default IconESportsHearthstone;
