import styled, { css } from "styled-components";
import { fromBottomMin } from "../../styles/Keyframes/Keyframes";

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.dark};
    padding: 5rem 0;

    &.active {
      animation-name: ${fromBottomMin};
      animation-duration: 1.5s;
    }
  `}
`;

export const ContainerFooter = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    align-items: center;
  }
`;

export const LogoContaint = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 780px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
  }
`;
