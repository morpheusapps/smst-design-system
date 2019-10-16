import styled from 'styled-components';
import { DynamicSizeProps } from '../../types';
import { ThemeProps } from './ButtonThemes';

type ButtonLayoutProps = DynamicSizeProps & { buttonTheme: ThemeProps };

export const ButtonLayout = styled.div<ButtonLayoutProps>`
  padding: 8px 10px;
  border-radius: 10px;
  border: ${({ buttonTheme }) =>
    `1px solid ${buttonTheme.borderColor || buttonTheme.color}`};
  width: ${({ width = 150 }) => `${width}px`};
  height: ${({ height = 20 }) => `${height}px`};
  background-color: ${({ buttonTheme }) => buttonTheme.color};
  color: ${({ buttonTheme }) => buttonTheme.textColor};
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ buttonTheme }) => buttonTheme.hoverColor};
    color: ${({ buttonTheme }) => buttonTheme.hoverTextColor};
  }
`;
