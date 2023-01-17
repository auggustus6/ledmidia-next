import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 2px;
`;
export const Main = styled.div`
  display: flex;
  gap: 3rem;
`;
export const AsideImage = styled.div`
  flex: 1;
  height: 500px;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  color: ${(p) => p.theme.colors.dark};
`;

export const ContentText = styled.div`
  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 2.5rem;
  }
`;

export const ContentMap = styled.div`
  height: 300px;
  background: #e7e7e7;
  border-radius: 3px;
  overflow: hidden;
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  background: ${(p) => p.theme.colors.button};
  border-radius: 50px;
  color: ${(p) => p.theme.colors.white};
  font-size: 1.5rem;
  font-weight: 500;

  cursor: pointer;

  max-width: 300px;
  width: 100%;

  margin-top: 2rem;

  &:hover {
    background: ${(p) => p.theme.colors.btnHover};
  }
`;

export const Gallery = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 100px;
  width: 100%;
  overflow-x: auto;
  /* background: rgba(0, 0, 0, 0.1); */
`;
export const GalleryItem = styled.div`
  height: 100%;
  min-width: 100px;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &.gallery__image-active {
    /* outline: 1px solid black; */
    position: relative;
    border-radius: 10px;

    &:after {
      content: "";
      position: absolute;
      inset: 0;
      top: 0;
      /* left: 130%; */
      /* background: rgba(255, 255, 255, 0.3); */
      border: 2px solid #222;
      /* background: red; */
      width: 100%;
      height: 100%;

      border-radius: 10px;
    }
  }
`;
