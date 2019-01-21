import styled from 'styled-components';
import style from '../../config/style';

const StyledWebProject = styled.div`
  margin: 1em;
  width: 45%;
  padding: 1.3em 1em;
  box-shadow: ${style.shadows.veryLight};
  font-size: .9rem;

  iframe {
    box-shadow: ${style.shadows.light};
    height: 200px;
    width: 80%;
  }

  h2 {
    margin: .5em 0;

    a {
      position: relative;
    }

    a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -.2em;
      left: 0;
      background-color: ${style.colors.body};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
  }

  &:hover {
    box-shadow: ${style.shadows.light};

    h2 {

      a {

        &:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
  }
`;

export default StyledWebProject;