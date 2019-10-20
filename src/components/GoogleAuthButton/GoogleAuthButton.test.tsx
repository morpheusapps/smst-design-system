import React from 'react';
import { render } from '@testing-library/react';
import { GoogleAuthButton, GoogleAuthButtonProps } from './GoogleAuthButton';
import { TextPerLanguage } from './GoogleAuthButtonTexts';
import { Fakes } from '../../../test-utils/Fakes';
import { Sample } from '../../../test-utils/Sample';

describe('<Button>', () => {
  let props: GoogleAuthButtonProps;

  beforeEach(() => {
    props = {
      url: Fakes.route(),
      language: Sample(['english', 'hebrew', undefined])
    };
  });

  test('url', () => {
    render(<GoogleAuthButton {...props} />);

    const anchorElement = document.querySelector('a') || {
      getAttribute: jest.fn()
    };

    expect(anchorElement.getAttribute('href')).toBe(props.url);
  });

  describe('text', () => {
    test('english - default', () => {
      const expectedText = TextPerLanguage.english;

      const { getByText } = render(<GoogleAuthButton url={Fakes.route()} />);

      expect(getByText(expectedText)).toBeDefined();
    });

    test('english', () => {
      const expectedText = TextPerLanguage.english;

      const { getByText } = render(
        <GoogleAuthButton url={Fakes.route()} language="english" />
      );

      expect(getByText(expectedText)).toBeDefined();
    });

    test('hebrew', () => {
      const expectedText = TextPerLanguage.hebrew;

      const { getByText } = render(
        <GoogleAuthButton url={Fakes.route()} language="hebrew" />
      );

      expect(getByText(expectedText)).toBeDefined();
    });
  });
});
