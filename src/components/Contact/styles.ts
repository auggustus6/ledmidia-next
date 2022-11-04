import styled, { css } from "styled-components";

export const Contact = styled.section`
  width: 100%;
  height: 86vh;
  background-image: url("img/banner2.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
`;

export const ContainerContact = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  width: 95%;
  padding: 10rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
`;

export const ContentContact = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    h2 {
      text-align: start;
      color: ${theme.colors.white};
      font-size: 3.2rem;
      line-height: 4.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      max-width: 60rem;
      font-family: "Mukta";
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: rgba(255, 255, 255, 0.72);
      text-align: start;
    }
  `}
`;

export const ContentForm = styled.div``;
