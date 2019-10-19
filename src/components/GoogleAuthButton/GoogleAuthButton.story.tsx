import React from 'react';
import { GoogleAuthButton } from './GoogleAuthButton';

export default {
  component: GoogleAuthButton,
  title: 'Buttons|GoogleAuthButton'
};

export const allLanguages = () => (
  <div
    style={{
      display: 'flex',
      width: '500px',
      justifyContent: 'space-between'
    }}
  >
    <GoogleAuthButton url="/" />
    <GoogleAuthButton url="/" language="hebrew" />
  </div>
);
