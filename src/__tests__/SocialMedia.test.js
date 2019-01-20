import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialMediaIcons from '../components/SocialMediaIcons';

Enzyme.configure({ adapter: new Adapter() });

describe('<SocialMediaIcons />', () => {
  it('renders an <a> element with the correct title, href and class', () => {
    const wrapper = mount(<SocialMediaIcons media="Facebook" />);
    expect(wrapper.find('a').prop('href')).toBe('https://www.facebook.com/liviarm');
    expect(wrapper.find('a').prop('title')).toBe('Facebook');
    expect(wrapper.find('i').prop('className')).toMatch(/fa fa-facebook-square .*/);
  });
});