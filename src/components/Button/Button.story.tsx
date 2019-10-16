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
  title: 'Button'
};

export const allButtons = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '700px'
    }}
  >
    <Button {...createDefaultProps()} text={text('Button1 Text', 'Button1')} />
    <Button {...createDefaultProps()} text={text('Button2 Text', 'Button2')} />
    <Button {...createDefaultProps()} text={text('Button3 Text', 'Button3')} />
  </div>
);

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
