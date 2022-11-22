import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const Contact = styled.section`
  width: 100%;
  height: auto;
  background-image: url("img/banner2.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;

  &.active {
    animation-name: ${fromBottomMenu};
    animation-duration: 1.5s;
  }

  @media (max-width: 450px) {
    height: auto;
  }
`;

export const ContainerContact = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ContentContact = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1200px) {
      align-items: center;
    }

    h2 {
      text-align: start;
      color: ${theme.colors.white};
      font-size: 3.2rem;
      line-height: 4.8rem;
      font-weight: 500;
      margin-bottom: 1rem;

      @media (max-width: 1200px) {
        text-align: center;
      }

      @media (max-width: 690px) {
        font-size: 2.8rem;
      }
    }

    p {
      max-width: 60rem;
      font-family: "Mukta";
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: rgba(255, 255, 255, 0.72);
      text-align: start;

      @media (max-width: 1200px) {
        text-align: center;
      }

      @media (max-width: 690px) {
        font-size: 2rem;
        line-height: 2.8rem;
      }
    }
  `}
`;

export const ContentForm = styled.div`
  width: 100%;
  max-width: 58rem;
`;
