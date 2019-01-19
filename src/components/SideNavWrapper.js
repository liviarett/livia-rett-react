import React, { Fragment } from 'react';
import SideNav from './SideNav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { FixedIcon } from './styled/StyledSideNav';

const SideNavWrapper = ({ isOpen, isClosing, isOpening, toggleSideNav }) => {
  return (
  <Fragment>
    <FixedIcon isOpen={isOpen} isOpening={isOpening} type={'fa-bars'} largeIcon handleClick={toggleSideNav} />
    {isOpen &&
    <ReactCSSTransitionGroup
      transitionName="side-nav"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeaveTimeout={5000}
      transitionLeave={true}
    >
      <SideNav toggleSideNav={toggleSideNav} isClosing={isClosing} />
    </ReactCSSTransitionGroup>}
  </Fragment>
)};

export default SideNavWrapper;