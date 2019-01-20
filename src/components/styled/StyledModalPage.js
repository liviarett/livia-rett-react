import styled from 'styled-components';
import style from '../../style';

const StyledModalPage = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${style.colors.modalOverlay};
  z-index: 1000;
  position: fixed;
  top: 0;

  .modal-content {
    width: 90%;
    height: 90%;
    background-color: #fff;
    margin: 2em auto;
    text-align: center;
    padding: 1em;
  }

  .close-modal {
    z-index: 1001;
    position: absolute;
    top: 10px;
    right: 2%;
    color: ${style.colors.closeModalIcon};
  }

  .content-wrapper {
    margin-top: 1em;
    overflow: scroll;
    height: 90%;

    p {
      margin-bottom: 1em;
      padding: 0 10%;
      line-height: 1.5;
    }
  }

`;

export const StyledImageRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 1em 0;

  img {
    object-fit: contain;
    height: ${props => props.numberOfImages === 6 ? '85%' : 'auto'};
    width: ${props => props.numberOfImages < 6 ? Math.floor(100 / props.numberOfImages) + '%' : 'auto'};
  }
`;
export default StyledModalPage;