import React, { useMemo } from 'react';
import { AsyncButton } from './AsyncButton';
import { SimpleButton, SimpleButtonProps } from './SimpleButton';
import { AsyncProps } from '../../types';

export type ButtonProps = SimpleButtonProps &
  AsyncProps & {
    /**
     * If provided, used as the button text and changes it into
     * a self-closing component. children will be ignored in that case
     **/
    text?: string;
  };

/**
 * `<Button>` is the main button component of semesterion UI
 */
export const Button = ({
  async = false,
  busy = false,
  text,
  children,
  ...simpleButtonProps
}: ButtonProps) => {
  const isAsyncButton = useMemo(() => async || busy, [async, busy]);
  const buttonChildren = useMemo(() => text || children, [text, children]);

  return isAsyncButton ? (
    <AsyncButton {...simpleButtonProps} busy={busy}>
      {buttonChildren}
    </AsyncButton>
  ) : (
    <SimpleButton {...simpleButtonProps}>{buttonChildren}</SimpleButton>
  );
};
