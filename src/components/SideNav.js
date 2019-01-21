import React from 'react';
import Icon from './Icon';
import { StyledNav } from './styled/StyledSideNav';
import { StyledSideNavToggle } from './styled/StyledIcons';
import SocialMediaIcons from './SocialMediaIcons';
import { scrollIntoView } from '../helpers';

const sections = [
  {
    className: 'home-li',
    iconType: 'fa fa-home',
    title: 'Home',
    ref: 'firstPage',
  }, {
    className: 'web-li',
    iconType: 'fa fa-code',
    title: 'Development Projects',
    ref: 'webDevPage',
  }, {
    className: 'design-li',
    iconType: 'fa fa-paint-brush',
    title: 'Design Projects',
    ref: 'designPage',
  }, {
    className: 'get-in-touch',
    iconType: 'far fa-id-card',
    title: 'Get in touch'
  }
];

const renderMenuItems = (sections, getRef, hideSideNav) => sections.map(section => {
  const element = getRef(section.ref);
  return (<li key={section.className} className={section.className} onClick={() => {
    if (!!element) {
      hideSideNav();
      scrollIntoView(element);
    }
  }}>
    <a href={`#${element && element.id}`} onClick={(e) => e.preventDefault()}>
      <Icon type={section.iconType} />{section.title}
    </a>
  </li>
)});

const SideNav = ({ hideSideNav, isClosing, openModal, getRef }) => (
  <StyledNav className={`${isClosing ? 'side-nav-leave ' : ''}side-nav`}>
      <StyledSideNavToggle isClosing={isClosing} type="far fa-times-circle" largeIcon handleClick={hideSideNav} />
      <nav>
        <ul>
          {renderMenuItems(sections, getRef, hideSideNav)}
          <li className="social-media"><SocialMediaIcons openModal={openModal}/></li>
        </ul>
      </nav>
  </StyledNav>
);

export default SideNav;