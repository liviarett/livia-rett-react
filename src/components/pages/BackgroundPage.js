import React from 'react';
import { StyledBackgroundPage } from '../styled/StyledPages';

const BackgroundPage = ({ firstHalf, secondHalf }) => (
  <StyledBackgroundPage
    firstHalf={firstHalf.background}
    secondHalf={secondHalf.background}>
    <section className="first-half">
      {firstHalf.shadow && <div className="shadow"></div>}
      </section>
      <section className="second-half">
      {secondHalf.shadow && <div className="shadow"></div>}
      </section>
  </StyledBackgroundPage>
);

export default BackgroundPage;