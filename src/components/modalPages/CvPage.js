import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StyledIcon } from '../styled/StyledIcons';

const StyledCvPage = styled.iframe`
  width: 210mm;
  height: 100%;
  margin: auto;
`;

const CvPage = () => (
  <Fragment>
    <StyledCvPage src="/cv/index.html" frameBorder="0" />
    <a href="/cv/Livia Rett CV.pdf" download>
      <StyledIcon type="fas fa-download" largeIcon />
    </a>
  </Fragment>
);

export default CvPage;