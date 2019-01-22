import React from 'react';
import StyledModalPage from './styled/StyledModalPage';
import CvPage from './pages/CvPage';
import DesignProjectPage from './pages/DesignProjectPage';
import { StyledIcon } from './styled/StyledIcons';

const mapOfContent = {
  cv: CvPage,
  'faap-moda': DesignProjectPage,
  'os-caras': DesignProjectPage,
  photography: DesignProjectPage,
  illustration: DesignProjectPage,
  pattern: DesignProjectPage,
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