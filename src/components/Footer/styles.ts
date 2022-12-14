import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.dark};
    padding-top: 5rem;
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
    align-items: flex-start;
  }
`;

export const LogoContaint = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 780px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
  }
`;
