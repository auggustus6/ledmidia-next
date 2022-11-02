import styled, { css } from "styled-components";

export const About = styled.div`
  width: 100%;
`;

export const ContainerAbout = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  width: 95%;
  padding: 10rem 2rem;
`;

export const ContentAbout = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #121212;
  }

  p {
    max-width: 99rem;
    font-family: "Mukta";
    color: #121212;
    font-weight: 500;
    margin-bottom: 5rem;
  }
`;
