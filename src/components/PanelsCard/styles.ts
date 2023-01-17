import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface PainelData {
  backgroundImg: string;
}

export const ContentPainel = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const PanelsWrapper = styled.div``;

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

  /* UNCOMMENT THIS TO ENABLE IMAGE CHANGE ON HOVER */
  /* &:hover {
    h1,
    p {
      display: none;
    }
    background-image: url(p.hoverBackgroundImg);
  } */

  h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    color: ${theme.colors.white};
    margin-top: 1rem;
  }

  p {
    font-family: "Mukta";
    font-size: 500;
    color: rgba(255, 255, 255, 0.72);
    line-height: 2.4rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const ContainerPanelsCard = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
  gap: 4rem;
`;
