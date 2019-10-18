import React from 'react';
//import GoogleIconImage from './googleIconImage.png';
import GoogleSvg from './googleIconImage.svg';
import { GoogleIconPlaceholder } from './GoogleAuthButtonLayout.styled';

export const GoogleIcon = () => (
  <GoogleIconPlaceholder>
    <img src={GoogleSvg} width={18} height={18} />
  </GoogleIconPlaceholder>
);
