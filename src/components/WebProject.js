import React from 'react';
import StyledWebProject from './styled/StyledWebProject';

const baseUrl = 'https://liviarett.github.io/';

const WebProject = ({ miniUrl, url, description, title }) => (
  <StyledWebProject >
    <iframe frameBorder="0" title={title} src={`${baseUrl}mini-projects/${miniUrl}`}>
    </iframe>
    <div>
      <h2><a href={`${baseUrl}${url}`} rel="noopener noreferrer" target="_blank">{title}</a></h2>
      <p>{description}</p>
    </div>
  </StyledWebProject>

);

export default WebProject;