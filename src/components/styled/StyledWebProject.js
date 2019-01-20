import styled from 'styled-components';
import style from '../../style';

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
  }
`;

export default StyledWebProject;