import React, { useState, useCallback } from 'react';
import { SimpleButton, SimpleButtonProps } from './SimpleButton';
import { ButtonSpinner } from './Button.styled';

export type AsyncButtonProps = SimpleButtonProps & { busy: boolean };

export const AsyncButton = ({
  onClick,
  disabled,
  busy,
  children,
  ...otherSimpleButtonProps
}: AsyncButtonProps) => {
  const [isInProgress, setIsInProgress] = useState(false);

  const asyncOnClick = useCallback(
    async (event: React.MouseEvent<HTMLElement>) => {
      setIsInProgress(true);
      await onClick(event);
      setIsInProgress(false);
    },
    [setIsInProgress, onClick]
  );

  return (
    <SimpleButton
      {...otherSimpleButtonProps}
      onClick={asyncOnClick}
      disabled={disabled || busy || isInProgress}
    >
      {!disabled && (busy || isInProgress) && (
        <ButtonSpinner testId={`${otherSimpleButtonProps.testId}-button`} />
      )}
      {children}
    </SimpleButton>
  );
};
