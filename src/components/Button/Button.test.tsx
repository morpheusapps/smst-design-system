import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';
import { Fakes } from '../../../test-utils/Fakes';

describe('<Button>', () => {
  const childElement = <div id="child" />;
  test('self closing', () => {
    const expectedText = Fakes.string();

    const wrapper = shallow(<Button text={expectedText} onClick={jest.fn()} />);

    const { children } = wrapper.props();

    expect(children).toEqual(expectedText);
  });

  test('non-self-closing', () => {
    const wrapper = shallow(
      <Button onClick={jest.fn()}>{childElement}</Button>
    );

    const { children } = wrapper.props();

    expect(children).toEqual(childElement);
  });

  test('non-self-closing - text override children', () => {
    const expectedText = Fakes.string();

    const wrapper = shallow(
      <Button text={expectedText} onClick={jest.fn()}>
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
});
