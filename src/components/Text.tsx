import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import typography, { Typography } from '../styles/typography';

type TextProps = {
  type: Typography
};

const CustomSpan = styled.span<TextProps>`
  ${({ type }) => typography[type]}
`;

const Text = ({ children, type }: PropsWithChildren<TextProps>) => <CustomSpan type={type}>{children}</CustomSpan>;

export default Text;
