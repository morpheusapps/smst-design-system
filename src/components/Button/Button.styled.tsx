import styled, { css } from 'styled-components';
import { DynamicSizeProps } from '../../types';
import { ThemeProps } from './ButtonThemes';

type ButtonLayoutProps = DynamicSizeProps & {
  buttonTheme: ThemeProps;
  disabled?: boolean;
};

export const ButtonLayout = styled.div<ButtonLayoutProps>`
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid
    ${({ buttonTheme }) => buttonTheme.borderColor || buttonTheme.color};
  width: ${({ width = 118 }) => `${width}px`};
  height: ${({ height = 20 }) => `${height}px`};
  background-color: ${({ buttonTheme }) => buttonTheme.color};
  color: ${({ buttonTheme }) => buttonTheme.textColor};
  text-align: center;
  ${({ disabled, buttonTheme }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          &:hover {
            cursor: pointer;
            background-color: ${buttonTheme.hoverColor};
            color: ${buttonTheme.hoverTextColor};
          }
          &:active {
            border: 1px solid ${buttonTheme.activeColor};
            background-color: ${buttonTheme.activeColor};
          }
        `}
`;
