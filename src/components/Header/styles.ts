import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    padding: 2rem 0 1rem;
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
  `}
`;

export const ContainerHeader = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
