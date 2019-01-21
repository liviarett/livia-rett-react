import React from 'react';
import StyledModalPage from './styled/StyledModalPage';
import CvPage from './modalPages/CvPage';
import DesignPage from './modalPages/DesignPage';
import { StyledIcon } from './styled/StyledIcons';

const mapOfContent = {
  cv: CvPage,
  'faap-moda': DesignPage,
  'os-caras': DesignPage,
  photography: DesignPage,
  illustration: DesignPage,
  pattern: DesignPage,
}

const ModalPage = ({ content, closeModal, isOpen, }) => {
  const ContentName = mapOfContent[content];
  return (
    isOpen ?
      <StyledModalPage className="animated fadeIn">
        <StyledIcon type="far fa-times-circle" className="close-modal" largeIcon handleClick={closeModal} />
        <div className="modal-content">
          <ContentName content={content}/>
        </div>
      </StyledModalPage>
      :
      null
  );
}

export default ModalPage;