import styled from 'styled-components';
import style from '../../style';

export const StyledFirstPage = styled.section`
  height: 100vh;
  background: ${props => `url(../images/${props.backgroundImage})`} repeat top;
  background-size: 20%;
  background-attachment: fixed;
  background-position: center;
  text-align: center;
  font-family: ${style.fonts.body};

  .overlay {
    height: 100%;
    width: 100%;
    background: ${style.colors.overlay};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3em 0;
  }

  h1,
  h2 {
    font-weight: 500;
    font-family: ${style.fonts.mono};
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

  i {
    font-size: 30px;
  }

  .find-out-more {
    margin-bottom: 1em;
    font-size: 1.3em;
    font-weight: 600;
  }
`;

export const StyledBackgroundPage = styled.section`
  height: 100vh;
`;