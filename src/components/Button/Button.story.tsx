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
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '700px'
      }}
    >
      <Button
        onClick={action('button clicked!')}
        text="negative"
        theme="negative"
      />
      <Button
        onClick={action('button clicked!')}
        text="positive"
        theme="positive"
      />
      <Button
        onClick={action('button clicked!')}
        text="primary"
        theme="primary"
      />
      <Button
        onClick={action('button clicked!')}
        text="secondary"
        theme="secondary"
      />
      <Button
        onClick={action('button clicked!')}
        text="tertiary"
        theme="tertiary"
      />
    </div>
  </>
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
