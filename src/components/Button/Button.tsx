import * as React from 'react';
import { ButtonLayout } from './Button.styled';
import { ContainerProps, DisplayProps } from '../../types';

export type ButtonProps = DisplayProps &
  ContainerProps & {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    text?: string;
    width?: number;
  };

export const Button = ({ onClick, text, width, children }: ButtonProps) => (
  <ButtonLayout width={width} onClick={onClick}>
    {text || children}
  </ButtonLayout>
);
