import ButtonAnimations from '../../types/ButtonAnimations';

const getAnimation = (animation?: ButtonAnimations): string => {
  switch (animation) {
    case 'error':
      return 'anim-error animate-[error_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_1_both]';
    case 'pulse':
      return 'anim-pulse animate-[pulse2_1.5s_infinite]';
    default:
      return '';
  }
};

export default getAnimation;
