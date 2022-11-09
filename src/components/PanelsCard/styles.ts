import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface PainelData {
  backgroundImg: string;
  hoverBackgroundImg: string;
}

export const Painel = styled.div<PainelData>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 58.8rem;
  height: 38rem;
  background-size: cover;
  background-image: url(${(p) => p.backgroundImg});

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
    background-image: url(${(p) => p.hoverBackgroundImg});
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
`;

export const ContainerPanelsCard = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
`;
