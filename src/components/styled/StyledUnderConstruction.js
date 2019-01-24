import styled from 'styled-components';
import style from '../../config/style';

const StyledUnderConstruction = styled.div`
  width: 100vw;
  padding: 1em;
  position: fixed;
  background-color: rgba(255, 255, 255, .95);
  text-align: center;
  box-shadow: ${style.shadows.medium};
`;

export default StyledUnderConstruction;