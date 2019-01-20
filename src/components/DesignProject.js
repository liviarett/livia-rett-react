import React from 'react';
import StyledDesignProject from './styled/StyledDesignProject';
import designProjects from '../designProjects';

const DesignProject = ({ openModal }) => (
  designProjects.map(project => (
    <StyledDesignProject backgroundImage={project.url} backgroundPosition={project.position} onClick={() => openModal(project.path)} >
        <div>
            <h1>{project.title}</h1>
        </div>
      </StyledDesignProject>
    ))
);

export default DesignProject;