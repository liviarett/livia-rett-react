import styled from 'styled-components';
import style from '../../config/style';

const StyledDesignProject = styled.div`
  min-height: 270px;
  height: 30%;
  width: 35%;
  background: ${props => `url(../images/${props.backgroundImage}) no-repeat ${props.backgroundPosition ? props.backgroundPosition : 'center'}`};
  background-size: cover;
  box-shadow: ${style.shadows.veryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5em 1.5em;

  &:hover {
    box-shadow: ${style.shadows.medium};

    div {
      transform: scale(0);
    }

    h1 {
      transform: scale(0);
    }
  }

  div {
    width: 100%;
    padding: 1em;
    background-color: ${style.colors.lightOverlay};
    transition: all .2s;
  }

  h1 {
    mix-blend-mode: color-burn;
    color: #555;
    transition: all .3s;
  }
`;

export default StyledDesignProject;