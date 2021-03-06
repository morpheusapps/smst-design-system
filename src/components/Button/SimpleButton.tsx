import React from 'react';
import { ThemesMap, Themes } from './ButtonThemes';
import { ButtonLayout } from './Button.styled';
import {
  ContainerProps,
  DisplayProps,
  DynamicSizeProps,
  TestProps
} from '../../types';
import { useConditionalCallback } from '../../hooks';

export type SimpleButtonProps = DisplayProps &
  DynamicSizeProps &
  ContainerProps &
  TestProps & {
    onClick: (event?: React.MouseEvent<HTMLElement>) => any;
    onHover?: (event?: React.MouseEvent<HTMLElement>) => any;
    /**
     * Select button theme
     *
     **/
    theme?: Themes;
    disabled?: boolean;
  };

export const SimpleButton = ({
  className,
  onClick,
  onHover,
  theme = 'primary',
  disabled = false,
  width,
  height,
  testId = '',
  children
}: SimpleButtonProps) => {
  const onClickFn = useConditionalCallback(onClick, !disabled);
  const onHoverFn = useConditionalCallback(onHover, !disabled);

  return (
    <ButtonLayout
      className={className}
      width={width}
      height={height}
      onClick={onClickFn}
      onMouseEnter={onHoverFn}
      buttonTheme={ThemesMap[theme]}
      disabled={disabled}
      data-testid={`${testId}-button`}
    >
      {children}
    </ButtonLayout>
  );
};
