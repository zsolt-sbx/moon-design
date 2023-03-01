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
      d="M9.15 27.106a.5.5 0 00.633-.774l-.634.774zm-2.39-3.217l.1-.49-1.355-.279.864 1.081.39-.312zm16.895.465l.467-.178-.122-.32-.342-.002-.003.5zm.224 1.99a.5.5 0 10.934-.356l-.934.356zm-5.02-3.847l.453-.212-.132-.282-.31-.006-.01.5zm-4.792-.095l.01-.5-.29-.005-.148.247.428.258zm.786-2.707a.5.5 0 000 1v-1zm7.842 1a.5.5 0 100-1v1zm-8.123.718a.5.5 0 00.194-.98l-.194.98zm-8.057.566l-.482.133.162.586.543-.271-.223-.448zm8.423-16.887a.5.5 0 00-.495-.869l.495.87zm-.648 17.29a.5.5 0 101 0h-1zm.5-18.882V3h-.5v.5h.5zm1.756 0h.5V3h-.5v.5zm0 .93h-.5v.5h.5v-.5zm1.86.5a.5.5 0 000-1v1zm7.888 22.778a.5.5 0 00-.588-.81l.588.81zm-6.701-.405l.353-.354-.146-.146h-.207v.5zm-.04 0v-.5h-.162l-.13.095.293.405zm-6.407 0l.354-.354-.147-.146h-.207v.5zm-.039 0v-.5h-.162l-.131.095.293.405zm-6.054-.354a.5.5 0 00-.707.707l.707-.706zm2.73-.617c-.613-.502-1.27-1.187-1.78-1.756a28.543 28.543 0 01-.838-.98l-.011-.015a.297.297 0 01-.003-.003v-.001a333.488 333.488 0 01-.782.624l.002.002.003.004.013.016a25.245 25.245 0 00.871 1.02c.521.581 1.218 1.312 1.891 1.863l.634-.774zm-3.124-1.953c.522.107 1.865.185 3.517.246 1.678.062 3.734.108 5.73.142a705.948 705.948 0 007.097.083l.48.003.126.001H23.652l.003-.5.003-.5H23.488l-.479-.004a791.135 791.135 0 01-7.087-.083c-1.993-.034-4.043-.08-5.71-.141-1.692-.063-2.932-.14-3.352-.227l-.202.98zm16.529.153l.69 1.812.935-.356-.69-1.812-.935.356zm-3.058-.498l-.818-1.749-.906.424.819 1.749.905-.424zm-1.26-2.037l-4.793-.095-.02 1 4.792.095.02-1zm-5.231.147l-1.02 1.693.856.517 1.02-1.694-.856-.516zm.769-15.56l7.084 13.908.89-.454L15.3 6.131l-.891.454zm.445 14.111h7.842v-1h-7.842v1zm-.087-.263c-2.255-.445-4.372-.168-5.914.214-.773.191-1.408.41-1.851.582a11.44 11.44 0 00-.655.278l-.038.018-.01.005-.004.002h-.001l.222.448.223.448h.001l.006-.003.028-.014a10.386 10.386 0 01.59-.25c.41-.16 1.004-.364 1.729-.544 1.454-.36 3.414-.61 5.48-.203l.194-.98zm-7.769 1.414c-1.45-5.261.506-9.428 2.863-12.313a20.973 20.973 0 014.629-4.16 12.55 12.55 0 01.444-.278l.005-.003-.248-.434c-.247-.435-.248-.434-.248-.434l-.003.002a.888.888 0 01-.034.02 13.754 13.754 0 00-.463.29A21.966 21.966 0 009.085 8.9c-2.484 3.04-4.616 7.534-3.052 13.21l.964-.266zm7.403-.951l.28-.414h.002s0 .001 0 0l-.006-.003a2.796 2.796 0 01-.178-.145 4.769 4.769 0 01-.514-.539c-.412-.499-.923-1.293-1.284-2.448-.719-2.305-.862-6.12 1.702-12.017l-.917-.398c-2.633 6.055-2.548 10.122-1.74 12.712.404 1.292.981 2.198 1.467 2.787.243.295.462.509.624.652a3.784 3.784 0 00.274.22l.006.005.003.001c.001.001.001.001.281-.413zm.89 1.486V3.5h-1v18.881h1zM14.79 4h1.756V3H14.79v1zm1.256-.5v.93h1V3.5h-1zm.5 1.43h1.86v-1h-1.86v1zm9.16 21.968c-1.727 1.252-3.167 1.23-4.161.936a4.337 4.337 0 01-1.507-.802 2.227 2.227 0 01-.09-.082c-.002 0-.003-.002-.003-.002v.001l-.352.354-.354.354.002.002.003.003.01.009.03.029c.026.023.062.056.109.095a5.34 5.34 0 001.868.997c1.28.38 3.044.357 5.033-1.084l-.588-.81zm-6.113-.095h-.04v1h.04v-1zm-.333.095c-1.727 1.252-3.167 1.23-4.162.936a4.336 4.336 0 01-1.506-.802 2.13 2.13 0 01-.094-.084h.001v.001l-.353.354c-.354.353-.353.354-.353.354l.002.002.003.003.01.009.03.029c.026.023.062.056.108.095a5.34 5.34 0 001.868.997c1.28.38 3.045.357 5.033-1.084l-.587-.81zm-6.114-.095h-.039v1h.04v-1zm-.332.095c-1.728 1.252-3.168 1.23-4.162.936a4.336 4.336 0 01-1.507-.802 2.187 2.187 0 01-.093-.084v.001l-.352.354-.354.354h.001l.001.002.003.003.01.009.03.029c.026.023.062.056.109.095a5.34 5.34 0 001.868.997c1.28.38 3.044.357 5.033-1.084l-.587-.81z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSailing =
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
export default SportSailing;
