
import styled from 'styled-components';
import style from '../../config/style';


export const StyledNav = styled.section`
  height: 100vh;
  width: ${style.sizes.sideNavWidth};
  position: fixed;
  right: 0;
  background-color: #fff;
  box-shadow: -1px 1px 1px rgba(100, 100, 100, 0.2);
  padding: 2.5em 1.5em;
  z-index: 9999;
  text-transform: uppercase;

  * {
    color: ${style.colors.sideNavText};
  }

  li {
    list-style: none;
    margin-bottom: 2em;
    text-align: left;
    position: relative;
    padding-left: 2em;

    i {
      list-style: none;
      text-align: left;
      height: 100%;
      padding-right: 1rem;
      display: inline-block;
      position: absolute;
      left: 0;
    }

    &.get-in-touch {
      pointer-events: none;
      cursor: default;
      margin-top: 5em;
    }

    &.social-media {
      padding-left: 0;
      text-align: center;

      i {
        font-size: 1.3em;
        position: static;
        margin-bottom: 1em;

        &:hover {

          &.fa-linkedin {
            color: ${style.colors.linkedin};
          }

          &.fa-facebook-square {
            color: ${style.colors.facebook};
          }

          &.fa-github-square {
            color: ${style.colors.github};
          }

          &.fa-envelope {
            color: ${style.colors.envelope};
          }

          &.fa-file-alt {
            color: ${style.colors.cv};
          }
        }
      }
    }
  }

  &.side-nav-appear {
    animation: slideIn 0.5s forwards;
  }

  &.side-nav-leave {
    animation: slideOut 0.5s forwards;
  }

  @keyframes slideIn {
    0% { right: -${style.sizes.sideNavWidth};}
    100% { right: 0; }
  }

  @keyframes slideOut {
    0% { right: 0; }
    100% { right: -${style.sizes.sideNavWidth}; }
  }
`;
