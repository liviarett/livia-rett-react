import React from 'react';
import Icon from './Icon';

const SlideDownButton = ({ className, handleClick }) => (
  <Icon className={className} type="fas fa-angle-double-down" handleClick={handleClick} />
);

export default SlideDownButton;