import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, actions } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Container Button', () => (
    <Button width={number('Button Width', 150)} {...actions('onClick')}>
      {text('Button Text', 'Text')}
    </Button>
  ))
  .add('Self Closing Button', () => (
    <Button text="Text" onClick={action('clicked!')} />
  ));
