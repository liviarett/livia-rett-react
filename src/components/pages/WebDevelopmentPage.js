import React, { Component } from 'react';
import { StyledWebDevelopmentPage } from '../styled/StyledPages';
import SlideDownButton from '../SlideDownButton';
import style from '../../style';
import WebProject from '../WebProject';

const projects = [
  {
    miniUrl: 'match',
    url: 'matchgame',
    description: 'A match game developed with HTML5, CSS3 and jQuery.',
    title: 'FAAP Moda Match Game',
  },
  {
    miniUrl: 'suggestionBox',
    url: 'suggestion-box',
    description: 'A suggestion box app developed with HTML5, CSS3 and Angular.js.',
    title: 'Suggestion Box',
  },
  {
    miniUrl: 'jumpstart',
    url: 'jumpstart',
    description: 'A landing page for a start-up company developed with HTML5, CSS3, jQuery and Slick plugin.',
    title: 'Jumpstart',
  },
  {
    miniUrl: 'trackster',
    url: 'trackster',
    description: 'A website that retrieves song information from the LastFM API, developed with HTML5, CSS3 and jQuery.',
    title: 'Trackster',
  },
  {
    miniUrl: 'secretSanta',
    url: 'secretsanta',
    description: 'A website for drawing secret Santas developed with HTML5, LESS and jQuery.',
    title: 'Secret Santa',
  }

];

class WebDevelopmentPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledWebDevelopmentPage>
        <div className="overlay">
          <div>
            <h1>DEVELOPMENT</h1>
          </div>
          <div className="content-wrapper">
            {
              projects.map(project => <WebProject {...project} />)
            }
          </div>
            <SlideDownButton className={`animated infinite ${style.effects.slideDownIcon}`} handleClick={() => {
              // SCROLL TO NEXT PAGE
            }} />
        </div>
      </StyledWebDevelopmentPage>);
  }
}


export default WebDevelopmentPage;