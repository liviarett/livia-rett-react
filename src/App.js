import React, { Component } from 'react';
import SideNavWrapper from './components/SideNavWrapper';
import { FirstPage } from './components/styled/StyledPages';
import {
  showSideNav,
  hideSideNav,
  toggleSideNav,
} from './helpers';
class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNav: {
        isOpen: false,
      }
    }
    this.toggleSideNav = toggleSideNav(this);
    this.showSideNav = showSideNav(this);
    this.hideSideNav = hideSideNav(this);
  }

  render() {
    return (
      <div className="App">
        <SideNavWrapper {...this.state.sideNav} toggleSideNav={this.toggleSideNav} />
        <FirstPage backgroundImage="Underground.jpg" />
      </div>
    );
  }
}

export default App;
