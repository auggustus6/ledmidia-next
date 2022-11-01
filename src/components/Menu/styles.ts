import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const List = styled.div`
  animation-name: ${fromBottomMenu};
  animation-duration: 2.5s;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    ul li:last-child a {
      padding: 1.6rem 2.4rem;
      background: ${theme.colors.button};
      border-radius: 37px;
      color: ${theme.colors.white};
    }

    ul li:last-child a:hover {
      background: #00aaff;
    }

    li {
      list-style: none;
    }

    li + li {
      margin-left: 2rem;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4;
    }

    a:hover {
      color: ${theme.colors.button};
    }

    @media screen and (max-width: 920px) {
      ul {
        flex-direction: column;
        position: fixed;
        left: -100rem;
        top: 0;

        background-color: #121212;
        width: 50%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.5s;
      }

      li + li {
        margin-left: 0;
      }

      a {
        color: ${theme.colors.white};
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;
