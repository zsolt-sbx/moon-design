/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { mq, spacing, container } from '@heathmont/sportsbet-utils';
import { breakpoints, colors, border } from '@heathmont/sportsbet-tokens';
import { Heading } from '@heathmont/sportsbet-components/lib/heading';
jsx;

const Background = styled.div([
  {
    width: '100%',
    background: `linear-gradient(${colors.neutral[90]} 14rem, 0%, ${colors.neutral[70]})`,
  },
]);

const cashierLayout: CSSObject = {
  ...container('default'),
};

export const CashierLayout: React.FC = ({ children }) => (
  <div css={cashierLayout}>{children}</div>
);

const heading: CSSObject = {
  paddingLeft: spacing('large'),
  paddingTop: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px ${border.style} ${colors.neutral[70]}`,
  [mq(breakpoints.medium)]: {
    paddingLeft: 0,
  },
};

export const StickyNav: React.FC<{ children: any }> = styled.div({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  ...container('default'),
  overflowX: 'auto',
});

export const CashierHeading: React.FC<{ children: any }> = ({ children }) => (
  <Heading size="charlie" as="h1" css={heading}>
    {children}
  </Heading>
);
