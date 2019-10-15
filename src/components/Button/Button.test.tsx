import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('<Button>', () => {
  test('onClick', () => {
    const onClickFn = jest.fn();
    const wrapper = shallow(<Button onClick={onClickFn} />);

    wrapper.simulate('click');

    expect(onClickFn).toHaveBeenCalled();
  });
});
