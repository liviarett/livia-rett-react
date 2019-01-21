import React from 'react';
import { StyledWebDevelopmentPage } from '../styled/StyledPages';
import SlideDownButton from '../SlideDownButton';
import style from '../../config/style';
import WebProject from '../WebProject';
import devProjects from '../../config/devProjects';

const WebDevelopmentPage = ({ nextPage, setRef, getRef }) => (
  <StyledWebDevelopmentPage id="web-dev-page" ref={ref => setRef(ref, 'webDevPage')}>
    <div className="overlay">
      <div>
        <h1>DEVELOPMENT</h1>
      </div>
      <div className="content-wrapper">
        {
          devProjects.map(project => <WebProject key={project.title} {...project} />)
        }
      </div>
      <SlideDownButton className={`animated infinite ${style.effects.slideDownIcon}`} nextPage="designPage" getRef={getRef} />
    </div>
  </StyledWebDevelopmentPage>);



export default WebDevelopmentPage;