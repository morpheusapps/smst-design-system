import React from 'react';
import { ButtonLayout } from './Button.styled';
import { ContainerProps, DisplayProps, DynamicSizeProps } from '../../types';

export type ButtonProps = DisplayProps &
  DynamicSizeProps &
  ContainerProps & {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onHover?: (event: React.MouseEvent<HTMLElement>) => void;
    text?: string;
  };

export const Button = ({
  className,
  onClick,
  onHover,
  text,
  width,
  height,
  children
}: ButtonProps) => (
  <ButtonLayout
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    onMouseEnter={onHover}
  >
    {text || children}
  </ButtonLayout>
);
