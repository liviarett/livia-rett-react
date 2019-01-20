import React, { Fragment } from 'react';
import SideNav from './SideNav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { FixedIcon } from './styled/StyledIcons';

const SideNavWrapper = ({ isOpen, isClosing, isOpening, isModalOpen, toggleSideNav, openModal }) =>
  <Fragment>
    {!isModalOpen && <FixedIcon isOpen={isOpen} isOpening={isOpening} type={'fas fa-bars'} largeIcon handleClick={toggleSideNav} />}
      {isOpen &&
      <ReactCSSTransitionGroup
        transitionName="side-nav"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={5000}
        transitionLeave={true}
      >
        <SideNav openModal={openModal} toggleSideNav={toggleSideNav} isClosing={isClosing} />
      </ReactCSSTransitionGroup>}
  </Fragment>;

export default SideNavWrapper;