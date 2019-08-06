import styled from '@emotion/styled';
import { listItemStyleTypeNone } from '@heathmont/sportsbet-objects';
import { border, colors } from '@heathmont/sportsbet-tokens';

import { CarouselInlineStyleProps } from './types';

/**
 * Settings
 *
 * If a browser supports the new scroll snap specification, use the styles
 * and disable legacy spec (keyed with 👴)
 */
const currentScrollingSpec = `@supports (scroll-snap-align: start)`;

/**
 * Carousel
 *
 * The outer Carousel container, allowing absolute positioning inside.
 */
export const Carousel = styled.div({
  position: 'relative',
  width: '100%',
});

/**
 * Carousel Scroll
 *
 * The list of Carousel Items, controlling overflow and scroll behavior.
 *
 * 1. Hide Scrollbars on browsers that don't support custom scrollbars.
 * 2. Auto-hide scrollbars on IE/Edge.
 * 3. Create 'padding' around the scrollbar.
 *
 */
export const CarouselScroll = styled.ul({
  display: 'block',
  verticalAlign: 'top',
  overflowX: 'auto',
  overflowY: 'hidden',
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none' /* [1] */,
  '-ms-overflow-style': '-ms-autohiding-scrollbar' /* [2] */,
  /* Custom Chrome Scroll Behaviour */
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    backgroundClip: 'content-box' /* [3] */,
    borderRadius: border.radius.largest,
    border: '3px solid transparent' /* [3] */,
  },
  ':hover::-webkit-scrollbar-thumb': {
    backgroundColor: colors.neutral[40],
  },
  /* Scroll Snapping */
  scrollSnapType: 'mandatory',
  scrollSnapDestination: '0 50%',
  scrollSnapPointsX: 'repeat(100%)',
  [currentScrollingSpec]: {
    scrollSnapType: 'x mandatory',
    scrollSnapDestination: 'unset' /* 👴 */,
    scrollSnapPointsX: 'unset' /* 👴 */,
  },
});

/**
 * Carousel Scroll Item
 *
 * The individual `list-item` of Carousel Scroll
 */
export type CarouselScrollItemProps = CarouselInlineStyleProps;

export const CarouselScrollItem = styled.li<CarouselScrollItemProps>(
  ({ inlineStyle }) => [
    {
      ...listItemStyleTypeNone,
      display: 'inline-block',
      verticalAlign: 'top',
      scrollSnapCoordinate: '0 0',
      [currentScrollingSpec]: {
        scrollSnapAlign: 'center',
        scrollSnapCoordinate: 'unset' /* 👴 */,
      },
    },
    inlineStyle,
  ]
);
