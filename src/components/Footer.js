import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const StyledFooter = styled.footer`
  padding: 2em 5em;
  font-size: .8em;

  i {
    margin-right: .5em;
  }
`;

const Footer = () => (
  <StyledFooter>&copy; {`${(new Date()).getFullYear()} `}
    All rights reserved. This website was developed using React <Icon type="fab fa-react" />    The repository is available <em><a href="https://github.com/liviarett/livia-rett-react">here</a></em>.</StyledFooter>
);

export default Footer;