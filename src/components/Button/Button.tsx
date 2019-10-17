import React, { useCallback } from 'react';
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
    theme?: 'negative' | 'positive' | 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
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
  disabled,
  width,
  height,
  children
}: ButtonProps) => {
  const onClickFn = useCallback(
    (event: React.MouseEvent<HTMLElement>) => !disabled && onClick(event),
    [onClick, disabled]
  );

  const onHoverFn = useCallback(
    (event: React.MouseEvent<HTMLElement>) =>
      !disabled && onHover && onHover(event),
    [onClick, onHover, disabled]
  );

  return (
    <ButtonLayout
      className={className}
      width={width}
      height={height}
      onClick={onClickFn}
      onMouseEnter={onHoverFn}
      buttonTheme={ThemesMap[theme]}
      disabled={disabled}
    >
      {text || children}
    </ButtonLayout>
  );
};
