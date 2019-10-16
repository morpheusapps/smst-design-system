import React from 'react';
import { ThemesMap } from './ButtonThemes';
import { ButtonLayout } from './Button.styled';
import { ContainerProps, DisplayProps, DynamicSizeProps } from '../../types';

export type ButtonProps = DisplayProps &
  DynamicSizeProps &
  ContainerProps & {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onHover?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * If provided, used as the button text and changes it into
     * a self-closing component. children will be ignored in that case
     **/
    text?: string;
    /**
     * Select button theme
     *
     **/
    theme?: 'important' | 'positive' | 'primary' | 'secondary' | 'tertiary';
  };

/**
 * `<Button>` is the main button component of semesterion UI
 */
export const Button = ({
  className,
  onClick,
  onHover,
  text,
  theme = 'primary',
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
    buttonTheme={ThemesMap[theme]}
  >
    {text || children}
  </ButtonLayout>
);
