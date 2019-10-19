import styled, { css } from 'styled-components';
import { DynamicSizeProps } from '../../types';
import { ThemeProps } from './ButtonThemes';
import { Spinner } from '../Spinner';

type ButtonLayoutProps = DynamicSizeProps & {
  buttonTheme: ThemeProps;
  disabled: boolean;
};

export const ButtonLayout = styled.div<ButtonLayoutProps>`
  position: relative;
  width: ${({ width = 118 }) => `${width}px`};
  height: ${({ height = 20 }) => `${height}px`};
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid
    ${({ buttonTheme }) => buttonTheme.borderColor || buttonTheme.color};
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
            border: 1px solid ${buttonTheme.hoverColor};
            background-color: ${buttonTheme.hoverColor};
            color: ${buttonTheme.hoverTextColor};
          }
          &:active {
            border: 1px solid ${buttonTheme.activeColor};
            background-color: ${buttonTheme.activeColor};
          }
        `}
`;

export const ButtonSpinner = styled(Spinner)`
  position: absolute;
  left: 20px;
  width: 20px;
  height: 20px;
`;
