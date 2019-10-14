import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { Button } from './Button';

storiesOf('Button', module).add('with text', () => (
  <Button width={number('Button Width', 150)}>
    {text('Button Text', 'Text')}
  </Button>
));
