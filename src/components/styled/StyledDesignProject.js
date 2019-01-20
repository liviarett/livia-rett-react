import styled from 'styled-components';
import style from '../../style';

const StyledDesignProject = styled.div`
  min-height: 270px;
  height: 30%;
  width: 35%;
  background: ${props => `url(../images/${props.backgroundImage}) no-repeat ${props.backgroundPosition ? props.backgroundPosition : 'center'}`};
  background-size: cover;
  box-shadow: ${style.shadows.light};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5em 1.5em;

  div {
    width: 100%;
    padding: 1em;
    background-color: ${style.colors.lightOverlay};
  }

  h1 {
    mix-blend-mode: color-burn;
    color: #555;
  }
`;

export default StyledDesignProject;