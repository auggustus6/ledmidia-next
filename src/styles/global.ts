import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

.swiper {
  padding: 1rem;
}

.swiper-slide {
  display: flex;
  padding-bottom: 5rem;
  align-items: center;
  justify-content: center;
}

.swiper-pagination-bullet-active {
  background: #505a23;
}

.swiper-button-prev {
  color: #121212;
}

.swiper-button-next {
  color: #121212;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

    ${({ theme }) => css` body {
        background: ${theme.colors.white};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.dark};
    `}
  `;

export default GlobalStyles;
