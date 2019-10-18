import React from 'react';
import { GoogleIcon } from './GoogleIcon';
import {
  GoogleAuthButtonLayout,
  GoogleTextPlaceholder
} from './GoogleAuthButtonLayout.styled';

export type GoogleAuthButtonProps = {
  url: string;
  text?: string;
};

export const GoogleAuthButton = ({
  url,
  text = 'Sign in with Google'
}: GoogleAuthButtonProps) => (
  <GoogleAuthButtonLayout href={url}>
    <GoogleIcon />
    <GoogleTextPlaceholder>{text}</GoogleTextPlaceholder>
  </GoogleAuthButtonLayout>
);
