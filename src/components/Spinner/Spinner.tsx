import React from 'react';
import { SpinnerAnimation } from './Spinner.styled';
import { DisplayProps, TestProps } from '../../types';

export type SpinnerProps = DisplayProps & TestProps;

export const Spinner = ({ className, testId = '' }: SpinnerProps) => (
  <SpinnerAnimation
    className={className}
    viewBox="0 0 50 50"
    data-testid={`${testId}-spinner`}
  >
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </SpinnerAnimation>
);
