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
`;

export default StyledModalPage;