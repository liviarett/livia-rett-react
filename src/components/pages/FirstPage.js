import React, { Component } from 'react';
import { StyledIcon } from '../styled/StyledIcons';
import { StyledFirstPage } from '../styled/StyledPages';
import SocialMediaIcons from '../SocialMediaIcons';
import SlideDownButton from '../SlideDownButton';

const languages = ['react', 'js', 'html5', 'css3-alt', 'less', 'git', 'npm'];
class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredElement: '',
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(element) {
    this.setState({
      hoveredElement: element,
    })
  }
  render() {
    const { openModal, getReference } = this.props;
    return (
      <StyledFirstPage backgroundImage="Underground.jpg" >
        <div className="overlay">
          <div>
            <h1>LIVIA RETT</h1>
            <h2 className="sub-title">DEVELOPER</h2>
          </div>
          <div>
            {languages.map(language =>
              <div className="icon-wrapper language-wrapper" onMouseEnter={() => this.toggleHover(language)} onMouseLeave={() => this.toggleHover('')}>
              <StyledIcon
                key={language}
                className={`language-icon${this.state.hoveredElement === language ? ' animated flipInY hover' : ''}`}
                languageItem
                type={`fab fa-${language}`}
              />
              </div>
              )}
          </div>
          <SocialMediaIcons openModal={openModal} />
          <div>
            <div className="find-out-more">FIND OUT MORE</div>
            <SlideDownButton className="animated infinite pulse" handleClick={() => {
              // SCROLL TO NEXT PAGE
            }} />
          </div>
        </div>
      </StyledFirstPage>);
  }
}


export default FirstPage;