import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { Button } from './Button';

const createDefaultProps = () => ({
  onClick: action('button clicked!'),
  width: number('Button Width', 150),
  height: number('Button Height', 20)
});

const createTextKnob = () => text('Button Text', 'Text');
export default {
  component: Button,
  title: 'Button',
  parameters: {
    componentSubtitle: 'button'
  }
};

export const containerButton = () => (
  <Button {...createDefaultProps()}>{createTextKnob()}</Button>
);

export const selfClosingButton = () => (
  <Button {...createDefaultProps()} text={createTextKnob()} />
);

export const buttonWithMouseOver = () => (
  <Button {...createDefaultProps()} onHover={action('button hovered!')}>
    {createTextKnob()}
  </Button>
);
