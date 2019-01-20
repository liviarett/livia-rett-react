import React from 'react';
import StyledModalPage from './styled/StyledModalPage';
import CvPage from './modalPages/CvPage';
import { StyledIcon } from './styled/StyledIcons';

const mapOfContent = {
  cv: CvPage
}

const ModalPage = ({ content, closeModal }) => {
  const ContentName = mapOfContent[content];
  return (<StyledModalPage>
    <StyledIcon type="far fa-times-circle" className="close-modal" largeIcon handleClick={closeModal} />
    <div className="modal-content">
      <ContentName />
    </div>
  </StyledModalPage>);
}

export default ModalPage;