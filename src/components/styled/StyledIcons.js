import styled from 'styled-components';
import Icon from '../Icon';
import style from '../../config/style';

export const StyledIcon = styled(Icon)`
  cursor: ${props => props.hasFunctionality ? '25px' : 'inherit'};
  filter: ${props => props.languageIcon ? 'none' : 'brightness(80%)'};
  font-size: ${props => props.largeIcon ? '28px' : 'inherit'};

  &.hover {
    filter: ${props => props.languageIcon ? 'none' : 'brightness(100%)'};

    &.fa-react {
      color: ${style.colors.react};
    }

    &.fa-js {
      color: ${style.colors.js};
    }

    &.fa-html5 {
      color: ${style.colors.html5};
    }

    &.fa-css3-alt {
      color: ${style.colors.css3};
    }

    &.fa-less {
      color: ${style.colors.less};
    }

    &.fa-git {
      color: ${style.colors.git};
    }

    &.fa-npm {
      color: ${style.colors.npm};
    }
  }
`;

export const StyledSideNavToggle = styled(StyledIcon)`
  position: absolute;
  right: .5em;
  top: 10px;
`;

export const FixedIcon = styled(StyledIcon)`
  position: fixed;
  top: 10px;
  right: 10px;
  opacity: ${props => props.isOpen || props.isOpening ? 0 : 1};
  transition: all .5s;
`
export default StyledIcon;