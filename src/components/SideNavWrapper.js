import React, { Fragment } from 'react';
import SideNav from './SideNav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { FixedIcon } from './styled/StyledIcons';

const SideNavWrapper = ({
  isOpen,
  isClosing,
  isOpening,
  isModalOpen,
  showSideNav,
  hideSideNav,
  openModal,
  getRef
}) =>
  <Fragment>
    {!isModalOpen && <FixedIcon isOpen={isOpen} isOpening={isOpening} type={'fas fa-bars'} largeIcon handleClick={showSideNav} />}
      {isOpen &&
      <ReactCSSTransitionGroup
        transitionName="side-nav"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={5000}
        transitionLeave={true}
      >
      <SideNav isOpen={isOpen} openModal={openModal} getRef={getRef} hideSideNav={hideSideNav} isClosing={isClosing} />
      </ReactCSSTransitionGroup>}
  </Fragment>;

export default SideNavWrapper;