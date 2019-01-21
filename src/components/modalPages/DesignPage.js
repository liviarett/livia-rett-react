import React, { Fragment } from 'react';
import designProjects from '../../config/designProjects';
import { StyledImageRow } from '../styled/StyledModalPage';

const DesignPage = ({ content }) => {
  const project = designProjects.filter(project => project.path === content)[0];
  return (
    <Fragment>
      <h1>{project.title}</h1>
      <div className="content-wrapper">
      <div dangerouslySetInnerHTML={{__html: project.description}} />
        {project.images.map(rowOfImage => (
          <StyledImageRow numberOfImages={rowOfImage.length} className="image-row">
            {rowOfImage.map(image => (
              <img src={`/images/${project.path}/${image}.jpg`} />
            ))}
          </StyledImageRow>
        ))}
      </div>
    </Fragment>
)};

export default DesignPage;