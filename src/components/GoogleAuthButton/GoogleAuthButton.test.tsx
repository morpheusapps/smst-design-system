import React from 'react';
import { render } from '@testing-library/react';
import { GoogleAuthButton, GoogleAuthButtonProps } from './GoogleAuthButton';
import { TextsPerLanguage } from './GoogleAuthButtonTexts';
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
      const expectedText = TextsPerLanguage.ENGLISH;

      const { queryByText } = render(<GoogleAuthButton url={Fakes.route()} />);

      expect(queryByText(expectedText)).not.toBeNull();
    });

    test('english', () => {
      const expectedText = TextsPerLanguage.ENGLISH;

      const { queryByText } = render(
        <GoogleAuthButton url={Fakes.route()} language="english" />
      );

      expect(queryByText(expectedText)).not.toBeNull();
    });

    test('hebrew', () => {
      const expectedText = TextsPerLanguage.HEBREW;

      const { queryByText } = render(
        <GoogleAuthButton url={Fakes.route()} language="hebrew" />
      );

      expect(queryByText(expectedText)).not.toBeNull();
    });
  });
});
