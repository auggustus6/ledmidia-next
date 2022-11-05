import styled, { css } from "styled-components";

export const SiteMap = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colors.white};
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 1.6rem;
    }

    li {
      margin-bottom: 1.6rem;
    }

    a {
      color: ${theme.colors.white};
      font-family: "Mukta", sans-serif;
      font-weight: 500;
      line-height: 2.4rem;
      color: rgba(255, 255, 255, 0.72);

      &:hover {
        color: ${theme.colors.btnHover};
      }
    }
  `}
`;
