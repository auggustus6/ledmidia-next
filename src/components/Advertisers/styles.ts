import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const Advertisers = styled.section`
  width: 100%;
  text-align: center;

  &.active {
    animation-name: ${fromBottomMenu};
    animation-duration: 1.5s;
  }
`;

export const ContainerAdvertisers = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem 0 2rem;
`;

export const ConTentAdvertisers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      margin-bottom: 5rem;
      text-align: center;
    }
  `}
`;

export const ContainerSlider = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
