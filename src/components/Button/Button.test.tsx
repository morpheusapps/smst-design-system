import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './Button';
import { Fakes } from '../../../test-utils/Fakes';
import { Sample } from '../../../test-utils/Sample';

describe('<Button>', () => {
  let props: ButtonProps;
  let childElement: React.ReactNode;
  let childElementText: string;

  const buttonTestId = 'test-button';

  beforeEach(() => {
    props = {
      className: Fakes.stringOptional(),
      onClick: jest.fn(),
      onHover: Sample([jest.fn(), undefined]),
      text: Fakes.stringOptional(),
      width: Fakes.numberOptional(),
      height: Fakes.numberOptional(),
      testId: 'test'
    };

    childElementText = Fakes.string();
    childElement = <div>{childElementText}</div>;
  });

  test('self closing', () => {
    const expectedText = Fakes.string();

    const { queryByText } = render(<Button {...props} text={expectedText} />);

    expect(queryByText(expectedText)).not.toBeNull();
  });

  describe('non self-closing', () => {
    test('only children provided', () => {
      const { queryByText } = render(
        <Button {...props} text={undefined}>
          {childElement}
        </Button>
      );

      expect(queryByText(childElementText)).not.toBeNull();
    });

    test('text override children', () => {
      const expectedText = Fakes.string();

      const { queryByText } = render(
        <Button {...props} text={expectedText}>
          {childElement}
        </Button>
      );

      expect(queryByText(expectedText)).not.toBeNull();
    });
  });

  test('onClick', () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<Button {...props} onClick={onClickSpy} />);

    fireEvent.click(getByTestId(buttonTestId));

    expect(onClickSpy).toHaveBeenCalled();
  });

  test('onHover', () => {
    const onHoverSpy = jest.fn();
    const { getByTestId } = render(<Button {...props} onHover={onHoverSpy} />);

    fireEvent.mouseEnter(getByTestId(buttonTestId));

    expect(onHoverSpy).toHaveBeenCalled();
  });

  describe('disabled', () => {
    test('onClick disabled', () => {
      const onClickSpy = jest.fn();
      const { getByTestId } = render(
        <Button {...props} onClick={onClickSpy} disabled />
      );

      fireEvent.click(getByTestId(buttonTestId));

      expect(onClickSpy).not.toHaveBeenCalled();
    });

    test('onHover disabled', () => {
      const onHoverSpy = jest.fn();
      const { getByTestId } = render(
        <Button {...props} onHover={onHoverSpy} disabled />
      );

      fireEvent.mouseEnter(getByTestId(buttonTestId));

      expect(onHoverSpy).not.toHaveBeenCalled();
    });
  });

  describe('busy', () => {
    const buttonSpinnerTestId = 'test-button-spinner';

    test('spinner exist', () => {
      const { getByTestId } = render(<Button {...props} busy />);

      expect(getByTestId(buttonSpinnerTestId));
    });

    test('disabled - spinner not exist', () => {
      const { queryByTestId } = render(<Button {...props} busy disabled />);

      expect(queryByTestId(buttonSpinnerTestId)).toBeNull();
    });

    test('onClick disabled', () => {
      const onClickSpy = jest.fn();
      const { getByTestId } = render(
        <Button {...props} onClick={onClickSpy} busy />
      );

      expect(getByTestId(buttonSpinnerTestId));
    });

    test('onHover disabled', () => {
      const onHoverSpy = jest.fn();
      const { getByTestId } = render(
        <Button {...props} onHover={onHoverSpy} busy />
      );

      fireEvent.mouseEnter(getByTestId(buttonTestId));

      expect(onHoverSpy).not.toHaveBeenCalled();
    });
  });
});
