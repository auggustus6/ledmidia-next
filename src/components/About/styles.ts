import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const About = styled.section`
  --bg-effect-color: ${(p) => p.theme.colors.btnHover};
  width: 100%;
  background: #121214;
  /* background-color: #e5e5f7; */
  opacity: 1;
  background-image: radial-gradient(
    ellipse farthest-corner at 4px 4px,
    rgba(255, 255, 255, 0.1),
    /* rgba(0, 170, 255,0.2), */ transparent 50%,
    transparent 50%
  );

  background-size: 6px 6px;
`;

export const ContainerAbout = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem 0 2rem;
`;

export const ContentAbout = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10rem;

    color: white;

    &.active {
      animation-name: ${fromBottomMenu};
      animation-duration: 1.5s;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 1rem;
      font-weight: 500;
      /* color: ${theme.colors.dark}; */
    }

    p {
      max-width: 99rem;
      font-family: "Mukta";
      /* color: rgba(18, 18, 18, 0.72); */
      font-weight: 500;
      margin-bottom: 5rem;
    }
  `}
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
