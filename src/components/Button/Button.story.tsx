import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { Button } from './Button';

const createDefaultProps = () => ({
  onClick: action('button clicked!'),
  width: number('Button Width', 150),
  height: number('Button Height', 20)
});

const createTextKnob = () => text('Button Text', 'Text');

storiesOf('Button', module)
  .add('Container Button', () => {
    return <Button {...createDefaultProps()}>{createTextKnob()}</Button>;
  })
  .add('Self Closing Button', () => (
    <Button {...createDefaultProps()} text={createTextKnob()} />
  ))
  .add('Button With Mouse Hover Function', () => (
    <Button {...createDefaultProps()} onHover={action('button hovered!')}>
      {createTextKnob()}
    </Button>
  ));
