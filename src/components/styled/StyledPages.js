import styled from 'styled-components';
import style from '../../config/style';

const StyledPage = styled.section`
  min-height: 100vh;
  width: 100%;
  text-align: center;
  font-family: ${style.fonts.body};

  i {
    font-size: 30px;
  }

  h1,
  h2 {
    font-weight: 500;
    font-family: ${style.fonts.mono};
  }

  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    max-width: 80%;
    height: 100%;
    padding: 1em;
  }
`;

export const StyledFirstPage = styled(StyledPage)`
  background: ${props => `url(../images/${props.backgroundImage})`} repeat top;
  background-size: 20%;
  background-attachment: fixed;
  background-position: center;

  .overlay {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: ${style.colors.overlay};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3em 0;
  }

  .sub-title {
    margin-top: 1.5em;
    font-weight: 300;
  }

  i.language-icon {
    font-size: 55px;
    text-shadow: 0 0 1px #bbb;
  }

  .language-wrapper {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 2em;
    }
  }

  a {
    &:not(:last-of-type) {
      margin-right: .9em;
    }
  }

  .find-out-more {
    margin-bottom: 1.7em;
    font-size: 1.3em;
    font-weight: 600;
  }
`;

export const StyledBackgroundPage = styled.section`
  height: 100vh;
  background-color: transparent;
  overflow: hidden;

  .first-half {
    height: 50%;
    background: ${props => `url(../images/${style.backgrounds[props.firstHalf].name}) ${style.backgrounds[props.firstHalf].repeat} ${style.backgrounds[props.firstHalf].position}` };
    background-size: ${props => style.backgrounds[props.firstHalf].size};
    background-attachment: ${props => style.backgrounds[props.firstHalf].attachment};
  }

  .second-half {
    height: 50%;
    background: ${props => `url(../images/${style.backgrounds[props.secondHalf].name}) ${style.backgrounds[props.secondHalf].repeat} ${style.backgrounds[props.secondHalf].position}` };
    background-size: ${props => style.backgrounds[props.secondHalf].size};
    background-attachment: ${props => style.backgrounds[props.secondHalf].attachment};
  }

  .shadow {
    width: 150%;
    height: 100%;
    box-shadow: inset 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    left: -10%;
  }
`;

export const StyledWebDevelopmentPage = styled(StyledPage)`
  padding: 2.5em 0;

`;

export const StyledDesignPage = styled(StyledPage)`
  padding: 2.5em 0;

  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    max-width: 80%;
    padding: 1em;
  }
`;