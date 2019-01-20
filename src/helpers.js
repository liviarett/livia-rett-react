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
        isOpen: false,
        isClosing: false,
      }
    })
  }, 500);
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

export const isSideNavChild = (element) => {
  if (element.classList.contains('side-nav')) {
    return true;
  }

  if (element.tagName !== 'BODY') {
    isSideNavChild(element.parentNode);
  }
  return false;
}
