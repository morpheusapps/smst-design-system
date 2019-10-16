import { configure, addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withGlobalStyle } from './withGlobalStyle';
import { withCenter } from './withCenter';

addParameters({
  options: {
    theme: themes.dark
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withGlobalStyle);
addDecorator(withCenter);

configure(require.context('../src', true, /\.story\.(tsx|mdx)$/), module);
