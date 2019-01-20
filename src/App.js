import React, { Component } from 'react';
import SideNavWrapper from './components/SideNavWrapper';
import ModalPage from './components/ModalPage';
import FirstPage from './components/pages/FirstPage';
import WebDevelopmentPage from './components/pages/WebDevelopmentPage';
import DesignPage from './components/pages/DesignPage';
import BackgroundPage from './components/pages/BackgroundPage';
import Footer from './components/Footer';
import {
  showSideNav,
  hideSideNav,
  toggleModal,
  isSideNavChild,
} from './helpers';
class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNav: {
        isOpen: false,
      },
      modal: {
        isOpen: false,
        content: '',
      }
    }
    this.showSideNav = showSideNav(this);
    this.hideSideNav = hideSideNav(this);
    this.toggleModal = toggleModal(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        if (this.state.modal.isOpen) {
          this.toggleModal();
        } else if (this.state.sideNav.isOpen) {
          this.hideSideNav();
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (this.state.sideNav.isOpen) {
        if (!isSideNavChild(e.target)) {
          this.hideSideNav();
        }
      }
    })
  }

  render() {

    return (
      <div className="App">
        <SideNavWrapper
          {...this.state.sideNav}
          isModalOpen={this.state.modal.isOpen}
          openModal={this.toggleModal}
          hideSideNav={this.hideSideNav}
          showSideNav={this.showSideNav}
        />
        <FirstPage openModal={this.toggleModal} />
        <BackgroundPage
        firstHalf={{
          background: 'underground',
          shadow: true,
        }}
        secondHalf={{
          background: 'lady',
        }}
        />
        <WebDevelopmentPage openModal={this.toggleModal} />
        <BackgroundPage
        firstHalf={{
          background: 'lady',
        }}
        secondHalf={{
          background: 'unicorns',
          shadow: true,
        }}
        />
        <DesignPage openModal={this.toggleModal} />
        <Footer />
        <ModalPage {...this.state.modal} closeModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
