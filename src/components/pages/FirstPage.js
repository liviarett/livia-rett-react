import React, { Component } from 'react';
import { StyledIcon } from '../styled/StyledIcons';
import { StyledFirstPage } from '../styled/StyledPages';
import SocialMediaIcons from '../SocialMediaIcons';
import SlideDownButton from '../SlideDownButton';
import style from '../../config/style';

const languages = ['react', 'js', 'html5', 'css3-alt', 'less', 'git', 'npm'];
class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredElement: '',
      delayed: false,
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        delayed: true,
      })
    }, 5000)
  }

  toggleHover(element) {
    this.setState({
      hoveredElement: element,
    })
  }

  render() {
    const { openModal, setRef, getRef } = this.props;
    return (
      <StyledFirstPage backgroundImage="underground.jpg" id="first-page" ref={ref => setRef(ref, 'firstPage')}>
        <div className="overlay">
          <div>
            <h1>LIVIA RETT</h1>
            <h2 className="sub-title">DEVELOPER</h2>
          </div>
          <div>
            {languages.map(language =>
              <div
                key={language}
                className="icon-wrapper language-wrapper"
                onMouseEnter={() => this.toggleHover(language)}
                onMouseLeave={() => this.toggleHover('')}>
              <StyledIcon
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
            <SlideDownButton className={`${this.state.delayed ? 'animated ' : ''}infinite ${style.effects.slideDownIcon}`} nextPage="webDevPage" getRef={getRef} />
          </div>
        </div>
      </StyledFirstPage>);
  }
}


export default FirstPage;