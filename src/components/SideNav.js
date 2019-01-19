import React from 'react';
import Icon from './Icon';
import { StyledNav, StyledIcon } from './styled/StyledSideNav';
import SocialMediaIcon from './SocialMediaIcon';

const socialMedias = ['Linkedin', 'Facebook', 'Github', 'Email'];
const sections = [
  {
    className: 'home-li',
    iconType: 'fa-home',
    title: 'Home'
  }
  ,
  {
    className: 'web-li',
    iconType: 'fa-code',
    title: 'Web Development Projects'
  }, {
    className: 'design-li',
    iconType: 'fa-paint-brush',
    title: 'Design Projects'
  }, {
    className: 'get-in-touch',
    iconType: 'fa-id-card-o',
    title: 'Get in touch'
  }
];

const renderMenuItems = (sections) => sections.map(section =>
  <li key={section.className} className={section.className}>
    <a href="">
      <Icon type={section.iconType} />{section.title}
    </a>
  </li>
);

const SideNav = ({ toggleSideNav, isClosing, isOpening }) => (
  <StyledNav className={isClosing ? 'side-nav-leave' : ''}>
      <StyledIcon isClosing={isClosing} type="fa-times-circle-o" largeIcon handleClick={toggleSideNav} />
      <nav>
        <ul>
          {renderMenuItems(sections)}
          <li>{socialMedias.map(media => <SocialMediaIcon key={media} media={media} />)}</li>
        </ul>
      </nav>
  </StyledNav>
);

export default SideNav;