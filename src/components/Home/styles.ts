import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const Home = styled.section`
  background-image: url("img/banner1.svg");
  background-size: cover;
  width: 100%;
  height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHome = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  width: 95%;
  padding: 10rem 2rem;
`;

export const ContentHome = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      animation-name: ${fromBottomMenu};
      animation-duration: 1.5s;
    }

    h1 {
      color: #fff;
      font-weight: 500;
      font-size: 4.8rem;
      line-height: 8rem;
      color: ${theme.colors.white};
      margin-bottom: 2rem;
    }

    p {
      color: ${theme.colors.white};
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
      margin-bottom: 3.6rem;
    }

    a {
      padding: 1.6rem 3.2rem;
      background: ${theme.colors.button};
      border-radius: 50px;
      color: ${theme.colors.white};
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
    }

    a:hover {
      background: ${theme.colors.btnHover};
    }
  `}
`;
