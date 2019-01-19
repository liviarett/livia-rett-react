import styled from 'styled-components';
import Page from '../Page';

export const FirstPage = styled(Page)`
  height: 100vh;
  background: ${props => `url(../images/${props.backgroundImage})`};
  background-size: 25%;
  background-attachment: fixed;
  background-position: center;
`;