import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../components/Icon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  const handleClick = jest.fn();

  it('renders a <i> element with the correct class and onClick function', () => {
    const wrapper = mount(<Icon type="fa-bars" handleClick={handleClick} />);
    expect(wrapper.find('i').prop('className')).toMatch(/fa fa-bars .*/)
    expect(wrapper.find('i').prop('onClick')).toBe(handleClick)
  });
});