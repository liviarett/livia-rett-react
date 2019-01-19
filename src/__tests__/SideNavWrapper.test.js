import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideNavWrapper from '../components/SideNavWrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('<SideNav />',() => {
  it('renders component', () => {
    const wrapper = mount(<SideNavWrapper />);
    expect(wrapper.length).toBe(1);
  });

  it('shows menu icon when sideNav is closed', () => {
    const wrapper = mount(<SideNavWrapper isOpen={false} toggleSideNav={jest.fn()} />);

    expect(wrapper.find('i.fa-bars').length).toBe(1);
  });

  it('shows sideNav when open', () => {
    const wrapper = mount(<SideNavWrapper isOpen={true} />);

    expect(wrapper.contains('Home')).toBe(true);
    expect(wrapper.contains('Web Development Projects')).toBe(true);
    expect(wrapper.contains('Design Projects')).toBe(true);
    expect(wrapper.contains('Get in touch')).toBe(true);
  });
})