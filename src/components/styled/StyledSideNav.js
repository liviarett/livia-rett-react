
import styled from 'styled-components';
import Icon from '../Icon';

export const menuWidth = '20vw';

export const StyledNav = styled.section`
  height: 100vh;
  width: ${menuWidth};
  position: fixed;
  right: 0;
  background-color: #fff;

  .toggle-side-nav:before {
    font-size: 30px;
  }

  li {
    list-style: none;
  }

  &.side-nav-appear {
    right: -${menuWidth};
    animation: slideIn 0.5s forwards;
  }

  &.side-nav-leave {
    right: 0;
    animation: slideOut 0.5s forwards;
  }

  @keyframes slideIn {
    100% { right: 0; }
  }

  @keyframes slideOut {
    100% { right: -${menuWidth}; }
  }
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  left: -1.3em;
  top: 10px;
  opacity: ${props => props.isClosing ? 0 : 1};
  transition: all .5s;
`;

export const FixedIcon = styled(Icon)`
  position: fixed;
  top: 10px;
  right: 10px;
  opacity: ${props => props.isOpen || props.isOpening ? 0 : 1};
  transition: all .5s;
`