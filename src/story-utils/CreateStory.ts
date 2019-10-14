import { storiesOf } from '@storybook/react';
import { StoryApi } from '@storybook/addons';

export const CreateStory = (storyName: string): StoryApi =>
  storiesOf(storyName, module);
