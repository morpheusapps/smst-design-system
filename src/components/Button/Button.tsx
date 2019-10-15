import React from 'react';
import { ButtonLayout } from './Button.styled';
import { ContainerProps, DisplayProps, DynamicSizeProps } from '../../types';

export type ButtonProps = DisplayProps &
  DynamicSizeProps &
  ContainerProps & {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    text?: string;
  };

export const Button = ({
  onClick,
  text,
  width,
  height,
  children
}: ButtonProps) => (
  <ButtonLayout width={width} height={height} onClick={onClick}>
    {text || children}
  </ButtonLayout>
);
