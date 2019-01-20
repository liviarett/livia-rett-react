import React from 'react';
import Icon from './Icon';
import { StyledNav } from './styled/StyledSideNav';
import { StyledSideNavToggle } from './styled/StyledIcons';
import SocialMediaIcons from './SocialMediaIcons';

const sections = [
  {
    className: 'home-li',
    iconType: 'fa fa-home',
    title: 'Home'
  }
  ,
  {
    className: 'web-li',
    iconType: 'fa fa-code',
    title: 'Web Development Projects'
  }, {
    className: 'design-li',
    iconType: 'fa fa-paint-brush',
    title: 'Design Projects'
  }, {
    className: 'get-in-touch',
    iconType: 'far fa-id-card',
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

const SideNav = ({ toggleSideNav, isClosing, openModal }) => (
  <StyledNav className={isClosing ? 'side-nav-leave' : ''}>
      <StyledSideNavToggle isClosing={isClosing} type="far fa-times-circle" largeIcon handleClick={toggleSideNav} />
      <nav>
        <ul>
          {renderMenuItems(sections)}
          <li className="social-media"><SocialMediaIcons openModal={openModal}/></li>
        </ul>
      </nav>
  </StyledNav>
);

export default SideNav;