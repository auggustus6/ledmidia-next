import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const Panels = styled.section`
  width: 100%;

  &.active {
    animation-name: ${fromBottomMenu};
    animation-duration: 1.5s;
  }
`;

export const ContainerPanels = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem 10rem;
`;

export const ContentPanels = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    h1 {
      font-size: 3.2rem;
      margin-bottom: 1rem;
      font-weight: 500;
      color: ${theme.colors.dark};
    }

    p {
      max-width: 99rem;
      font-family: "Mukta";
      color: rgba(18, 18, 18, 0.72);
      font-weight: 500;
    }
  `}
`;

export const ContainerPanelsCard = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const PainelOne = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 58.8rem;
    height: 38rem;
    background-image: url("/img/painel1.svg");
    background-size: cover;
    transition: 0.3s;

    @media (max-width: 1330px) {
      max-width: 50rem;
    }

    @media (max-width: 1140px) {
      max-width: 40rem;
      height: 28rem;
    }

    @media (max-width: 414px) {
      max-width: 33rem;
      height: 28rem;
    }

    &:hover {
      h1,
      p {
        display: none;
      }
      background-image: url("/img/anubis.svg");
    }

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
      color: ${theme.colors.white};
    }

    p {
      font-family: "Mukta";
      font-size: 500;
      color: rgba(255, 255, 255, 0.72);
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  `}
`;

export const PainelTwo = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 58.8rem;
    height: 38rem;
    background-image: url("/img/painel2.svg");
    background-size: cover;
    transition: 0.3s;

    @media (max-width: 1330px) {
      max-width: 50rem;
    }

    @media (max-width: 1140px) {
      max-width: 40rem;
      height: 28rem;
    }

    @media (max-width: 414px) {
      max-width: 33rem;
      height: 28rem;
    }

    :hover {
      h1,
      p {
        display: none;
      }
      background-image: url("/img/rene.svg");
    }

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
      color: ${theme.colors.white};
    }

    p {
      font-family: "Mukta";
      font-size: 500;
      color: rgba(255, 255, 255, 0.72);
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  `}
`;

export const PainelThree = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 58.8rem;
    height: 38rem;
    background-image: url("/img/painel3.svg");
    background-size: cover;
    transition: 0.3s;

    @media (max-width: 1330px) {
      max-width: 50rem;
    }

    @media (max-width: 1140px) {
      max-width: 40rem;
      height: 28rem;
    }

    @media (max-width: 414px) {
      max-width: 33rem;
      height: 28rem;
    }

    :hover {
      h1,
      p {
        display: none;
      }
      background-image: url("/img/murchid.svg");
    }

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
      color: ${theme.colors.white};
    }

    p {
      font-family: "Mukta";
      font-size: 500;
      color: rgba(255, 255, 255, 0.72);
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  `}
`;

export const PainelFour = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 58.8rem;
    height: 38rem;
    background-image: url("/img/painel4.svg");
    background-size: cover;
    transition: 0.3s;

    @media (max-width: 1330px) {
      max-width: 50rem;
    }

    @media (max-width: 1140px) {
      max-width: 40rem;
      height: 28rem;
    }

    @media (max-width: 414px) {
      max-width: 33rem;
      height: 28rem;
    }

    :hover {
      h1,
      p {
        display: none;
      }
      background-image: url("/img/philadelpho.svg");
    }

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500;
      color: ${theme.colors.white};
    }

    p {
      font-family: "Mukta";
      font-size: 500;
      color: rgba(255, 255, 255, 0.72);
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  `}
`;