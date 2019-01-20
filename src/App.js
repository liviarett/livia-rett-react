import React, { Component } from 'react';
import SideNavWrapper from './components/SideNavWrapper';
import ModalPage from './components/ModalPage';
import FirstPage from './components/pages/FirstPage';
import BackgroundPage from './components/pages/BackgroundPage';
import {
  showSideNav,
  hideSideNav,
  toggleSideNav,
  toggleModal,
} from './helpers';
class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNav: {
        isOpen: true,
      },
      modal: {
        isOpen: false,
        content: '',
      }
    }
    this.toggleSideNav = toggleSideNav(this);
    this.showSideNav = showSideNav(this);
    this.hideSideNav = hideSideNav(this);
    this.toggleModal = toggleModal(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        if (this.state.modal.isOpen) {
          this.toggleModal();
        } else if (this.state.sideNav.isOpen) {
          this.hideSideNav();
        }
      }
    });
  }

  render() {

    return (
      <div className="App">
        <SideNavWrapper
          {...this.state.sideNav}
          isModalOpen={this.state.modal.isOpen}
          openModal={this.toggleModal}
          toggleSideNav={this.toggleSideNav} />
        <FirstPage openModal={this.toggleModal} />
        <BackgroundPage />
        {this.state.modal.isOpen ? <ModalPage {...this.state.modal} closeModal={this.toggleModal}/> : null}
      </div>
    );
  }
}

export default App;
