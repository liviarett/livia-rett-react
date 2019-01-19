import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideNav from '../components/SideNav';

Enzyme.configure({ adapter: new Adapter() });

describe('<SideNav />',() => {
  it('renders component', () => {
    const wrapper = mount(<SideNav />);
    expect(wrapper.length).toBe(1);
  });
})