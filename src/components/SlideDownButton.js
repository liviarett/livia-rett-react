import React from 'react';
import Icon from './Icon';
import { scrollIntoView } from '../helpers';

const SlideDownButton = ({ className, handleClick, nextPage, getRef }) => (
  <Icon className={className} type="fas fa-angle-double-down" handleClick={() => scrollIntoView(getRef(nextPage))} />
  );

export default SlideDownButton;