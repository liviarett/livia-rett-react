import React from 'react';
import { StyledDesignPage } from '../styled/StyledPages';
import DesignProject from '../DesignProject';

const DesignPage = ({ setRef, openModal }) => (
  <StyledDesignPage id="design-page" ref={ref => setRef(ref, 'designPage')}>
      <div>
        <h1>DESIGN</h1>
      </div>
      <div className="content-wrapper">
      <DesignProject openModal={openModal}/>
      </div>
  </StyledDesignPage>
);

export default DesignPage;