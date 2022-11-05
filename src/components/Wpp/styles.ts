import styled, { css } from "styled-components";

export const Wpp = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    background: ${theme.colors.dark};
    padding: 0 3rem;
  `}
`;
