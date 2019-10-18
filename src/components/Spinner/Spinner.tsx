import React from 'react';
import { SpinnerAnimation } from './Spinner.styled';
import { DisplayProps } from '../../types';

export type SpinnerProps = DisplayProps;

export const Spinner = ({ className }: SpinnerProps) => (
  <SpinnerAnimation className={className} viewBox="0 0 50 50">
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
