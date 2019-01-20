import React, { Component } from 'react';
import { StyledDesignPage } from '../styled/StyledPages';
import DesignProject from '../DesignProject';

class DesignPage extends Component {
  render() {
    return (
      <StyledDesignPage>
          <div>
            <h1>DESIGN</h1>
          </div>
          <div className="content-wrapper">
          <DesignProject openModal={this.props.openModal}/>
          </div>
      </StyledDesignPage>);
  }
}


export default DesignPage;