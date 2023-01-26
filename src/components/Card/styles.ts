import styled, { css } from "styled-components";
import { fadeOpacity } from "../../styles/Keyframes/Keyframes";

export const Card = styled.div`
  max-width: 38rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  background: white;

  border-radius: 3px;

  min-height: 280px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    cursor: pointer;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      width: 64px;

      /* background: blue; */

      svg {
        color: ${theme.colors.button};
        font-size: 10rem;
        /* height: 100%;
        width: 100%; */
        animation: floating 1s infinite ease-in-out;
        animation-direction: alternate;
      }
    }

    &.active {
      animation-name: ${fadeOpacity};
      animation-duration: 1.5s;
    }

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: ${theme.colors.dark};
      margin: 2.4rem 0 0.8rem;
    }

    p {
      color: rgba(18, 18, 18, 0.72);
      text-align: center;
    }
  `}

  @keyframes floating {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(10px);
    }
  }
`;
