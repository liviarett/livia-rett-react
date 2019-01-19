import React from 'react';
import styled from 'styled-components';

const Styled = styled.i`
  cursor: pointer;
  filter: brightness(80%);
  font-size: ${props => props.largeIcon ? '25px' : 'inherit'};

  :hover {
    filter: brightness(100%);
  }
`;

const Icon = ({ type, handleClick, largeIcon, className }) => (
  <Styled className={`${className} fa ${type}`} largeIcon={largeIcon} onClick={handleClick} />
);

export default Icon;