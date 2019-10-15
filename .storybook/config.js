import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withConsole } from '@storybook/addon-console';
import { withStorySource } from '@storybook/addon-storysource';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import { withGlobalStyle } from './withGlobalStyle';

const req = require.context('../src', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    theme: themes.dark
  }
});

addDecorator(centered);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withGlobalStyle);

configure(loadStories, module);
