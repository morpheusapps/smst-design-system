import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonProps } from './Button';
import { Fakes } from '../../../test-utils/Fakes';
import { Sample } from '../../../test-utils/Sample';

describe('<Button>', () => {
  let props: ButtonProps;

  const childElement = <div id="child" />;

  beforeEach(() => {
    props = {
      className: Fakes.stringOptional(),
      onClick: jest.fn(),
      onHover: Sample([jest.fn(), undefined]),
      text: Fakes.stringOptional(),
      width: Fakes.numberOptional(),
      height: Fakes.numberOptional()
    };
  });

  test('self closing', () => {
    const expectedText = Fakes.string();

    const wrapper = shallow(<Button {...props} text={expectedText} />);

    const { children } = wrapper.props();

    expect(children).toEqual(expectedText);
  });

  test('non-self-closing', () => {
    const wrapper = shallow(
      <Button {...props} text={undefined}>
        {childElement}
      </Button>
    );

    const { children } = wrapper.props();

    expect(children).toEqual(childElement);
  });

  test('non-self-closing - text override children', () => {
    const expectedText = Fakes.string();

    const wrapper = shallow(
      <Button {...props} text={expectedText}>
        {childElement}
      </Button>
    );

    const { children } = wrapper.props();

    expect(children).toEqual(expectedText);
  });

  test('onClick', () => {
    const onClickFn = jest.fn();
    const wrapper = shallow(<Button onClick={onClickFn} />);

    wrapper.simulate('click');

    expect(onClickFn).toHaveBeenCalled();
  });

  test('onHover', () => {
    const onHoverFn = jest.fn();
    const wrapper = shallow(<Button {...props} onHover={onHoverFn} />);

    wrapper.simulate('mouseenter');

    expect(onHoverFn).toHaveBeenCalled();
  });
});
