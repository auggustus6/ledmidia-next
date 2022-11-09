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
