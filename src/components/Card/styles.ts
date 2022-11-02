import styled, { css } from "styled-components";
import { fadeOpacity } from "../../styles/Keyframes/Keyframes";

export const Card = styled.div`
  max-width: 38rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
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
`;
