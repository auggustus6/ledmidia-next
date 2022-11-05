import styled, { css } from "styled-components";

export const Address = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colors.white};
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 1.6rem;
    }

    p {
      color: ${theme.colors.white};
      font-family: "Mukta", sans-serif;
      font-weight: 500;
      line-height: 2.4rem;
      color: rgba(255, 255, 255, 0.72);
      margin-bottom: 1.6rem;
    }
  `}
`;
