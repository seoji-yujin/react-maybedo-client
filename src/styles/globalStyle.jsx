import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import theme from './theme';

const baseStyle = css`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  ${emotionNormalize}
  :root {
    --color-primary: #4e4eff;
    --color-disabled: #9d9dfe;
    --color-textgray: #8b8b8b;
    --color-border: #d9d9d9;
    --max-width: 1240px;
  }
  html {
    font-family: 'Noto Sans KR', sans-serif;
    @media ${theme.device.phone} {
      font-size: 15px;
    }
    @media ${theme.device.tablet} {
      font-size: 15px;
    }
    @media ${theme.device.laptop} {
      font-size: 16px;
    }
    @media ${theme.device.laptopL} {
      font-size: 16px;
    }
    @media ${theme.device.desktop} {
      font-size: 17px;
    }
  }
  body {
    margin: 0;
    height: 100%;
    overflow: auto;
    line-height: 1.5;
    /* color: var(--color-primary); */
    color: #000;
    background-color: #fbfbfd;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  textarea,
  select:focus,
  input:focus {
    outline: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
