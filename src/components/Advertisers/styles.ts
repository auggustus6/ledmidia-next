import styled, { css } from "styled-components";

export const Advertisers = styled.section`
  width: 100%;
  text-align: center;
`;

export const ContainerAdvertisers = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  width: 95%;
  padding: 0rem 2rem;
`;

export const ConTentAdvertisers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => css`
    h1 {
      font-size: 3.2rem;
      margin-bottom: 1rem;
      font-weight: 500;
      color: ${theme.colors.dark};
    }

    p {
      max-width: 99rem;
      font-family: "Mukta";
      color: rgba(18, 18, 18, 0.72);
      font-weight: 500;
      margin-bottom: 5rem;
      text-align: center;
    }
  `}
`;

export const ContainerSlider = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
