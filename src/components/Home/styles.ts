import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const Home = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 9.7rem;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100.4vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerHome = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10rem;
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

      &:hover {
        background: ${theme.colors.btnHover};
      }
    }
    @media (max-width: 750px) {
      h1 {
        line-height: 4.8rem;
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 3.8rem;
      }

      p {
        font-size: 2rem;
      }

      a {
        font-size: 2rem;
      }
    }
  `}
`;
