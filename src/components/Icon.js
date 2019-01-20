import React from 'react';

const Icon = (props) => <i
    className={`${props.className ? `${props.className} ` : ''}${props.type}`}
    onClick={props.handleClick}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  />
;

export default Icon;