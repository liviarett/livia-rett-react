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
  const isSideNavOpen = component.state.sideNav.isOpen;
  const timeout = isSideNavOpen ? 500 : 0;
  if (isSideNavOpen) {
    component.hideSideNav();
  }

  setTimeout(() => {
    component.setState({
      modal: {
        ...component.state.modal,
        isOpen: !component.state.modal.isOpen,
        content
      }
    })
  }, timeout)
}

export const isSideNavChild = (element) => {
  if (element.classList.contains('side-nav')) {
    return true;
  }

  if (element.tagName !== 'BODY') {
    return isSideNavChild(element.parentNode);
  }
  return false;
}

export const scrollIntoView = (element) => {
  const pixelsToNavigate = window.pageYOffset - element.offsetTop;
  const speed = Math.abs(pixelsToNavigate) > 2500 ? 100 : 50;
  const stepInteger = Math.abs(pixelsToNavigate) > 2500 ? 10 : 5;
  const step = pixelsToNavigate > 0 ? -stepInteger : stepInteger;

  const canGoFurther = (step, current, target) => {
    if (step > 0) {
      return current + step < target;
    }
    return current + step > target;
  }

  const scrolling = setInterval(() => {
    if (window.pageYOffset !== element.offsetTop) {
      const offset = canGoFurther(step, window.pageYOffset, element.offsetTop) ? window.pageYOffset + step : element.offsetTop;
      window.scrollTo(0, offset);
    } else {
      clearInterval(scrolling);
    }
  }, 100 / speed);
};
