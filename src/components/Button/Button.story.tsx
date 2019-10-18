import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, select, boolean } from '@storybook/addon-knobs';
import { Themes } from './ButtonThemes';
import { Button } from './Button';

const ThemeArray: Themes[] = [
  'negative',
  'positive',
  'primary',
  'secondary',
  'tertiary'
];

const createDefaultProps = () => ({
  onClick: action('button clicked!'),
  width: number('Button Width', 118),
  height: number('Button Height', 20),
  theme: select('Button Theme', ThemeArray, 'primary'),
  disabled: boolean('Button Disabled', false),
  busy: boolean('Button Busy', false)
});

const createTextKnob = () => text('Button Text', 'Text');

export default {
  component: Button,
  title: 'Buttons|Button'
};

export const allButtons = () => (
  <>
    <div
      style={{
        display: 'flex',
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
    <div
      style={{
        display: 'flex',
        width: '700px'
      }}
    >
      <Button
        onClick={action('button clicked!')}
        text="disabled"
        theme="negative"
        disabled
      />
      <Button
        onClick={action('button clicked!')}
        text="disabled"
        theme="positive"
        disabled
      />
      <Button
        onClick={action('button clicked!')}
        text="disabled"
        theme="primary"
        disabled
      />
      <Button
        onClick={action('button clicked!')}
        text="disabled"
        theme="secondary"
        disabled
      />
      <Button
        onClick={action('button clicked!')}
        text="disabled"
        theme="tertiary"
        disabled
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

export const asyncButton = () => {
  const asyncOnClick = (): Promise<void> =>
    new Promise(resolve =>
      // eslint-disable-next-line no-console
      setTimeout(() => resolve(console.log('async action fired!')), 2000)
    );

  return (
    <Button
      {...createDefaultProps()}
      onClick={() => asyncOnClick()}
      text={createTextKnob()}
      async={boolean('Button Async', true)}
    />
  );
};
