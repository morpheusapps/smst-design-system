import React from 'react';
import { GoogleIcon } from './GoogleIcon';
import { Languages, TextsPerLanguage } from './GoogleAuthButtonTexts';
import {
  GoogleAuthButtonLayout,
  GoogleTextPlaceholder
} from './GoogleAuthButtonLayout.styled';

export type GoogleAuthButtonProps = {
  url: string;
  /**
   * Determine the language of the button text
   **/
  language?: Languages;
};

/**
 * `<GoogleAuthButton>` used for google authentication
 */
export const GoogleAuthButton = ({
  url,
  language = 'english'
}: GoogleAuthButtonProps) => (
  <GoogleAuthButtonLayout href={url} data-test-id="google-login-button">
    <GoogleIcon />
    <GoogleTextPlaceholder>
      {TextsPerLanguage[language.toUpperCase()]}
    </GoogleTextPlaceholder>
  </GoogleAuthButtonLayout>
);
