export const showSideNav = (component) => () => {
  component.setState({
    sideNav: {
      ...component.state.sideNav,
      isOpening: true,
    }
  });
  setTimeout(() => {
    component.setState({
      sideNav: {
        ...component.state.sideNav,
        isOpen: true,
        isOpening: false,
      }
    })
  }, 500);
}

export const hideSideNav = (component) => () => {
  component.setState({
    sideNav: {
      ...component.state.sideNav,
      isClosing: true,
    }
  });

  setTimeout(() => {
    component.setState({
      sideNav: {
        ...component.state.sideNav,
        isOpen: !component.state.sideNav.isOpen,
        isClosing: false,
      }
    })
  }, 500);
}

export const toggleSideNav = (component) => () => {
  if (component.state.sideNav.isOpen) {
    component.hideSideNav()
  } else {
    component.showSideNav();
  }
}

export const toggleModal = (component) => (content) => {
  component.setState({
    modal: {
      ...component.state.modal,
      isOpen: !component.state.modal.isOpen,
      content
    }
  })
}
