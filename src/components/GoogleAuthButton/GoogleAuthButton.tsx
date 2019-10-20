import React from 'react';
import { GoogleIcon } from './GoogleIcon';
import { TextPerLanguage } from './GoogleAuthButtonTexts';
import { Language } from '../../const/Language';
import {
  GoogleAuthButtonLayout,
  GoogleTextPlaceholder
} from './GoogleAuthButtonLayout.styled';
import { DisplayProps } from '../../types';

export type GoogleAuthButtonProps = DisplayProps & {
  url: string;
  /**
   * Determine the language of the button text
   **/
  language?: Language;
};

/**
 * `<GoogleAuthButton>` is used for google authentication
 */
export const GoogleAuthButton = ({
  className,
  url,
  language = 'english'
}: GoogleAuthButtonProps) => (
  <GoogleAuthButtonLayout
    className={className}
    href={url}
    data-testid="google-login-button"
  >
    <GoogleIcon />
    <GoogleTextPlaceholder>{TextPerLanguage[language]}</GoogleTextPlaceholder>
  </GoogleAuthButtonLayout>
);
