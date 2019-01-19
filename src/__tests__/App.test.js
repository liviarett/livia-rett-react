import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import SideNav from '../components/SideNav';
import SideNavWrapper from '../components/SideNavWrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('renders component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).toBe(1)
  });

  it('does not render sideNav at first', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(SideNavWrapper).length).toBe(1)
    expect(wrapper.find(SideNav).length).toBe(0)
    expect(wrapper.find('i.fa-bars').length).toBe(1)
  });
});