import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 8px;

  color: white;
  background: rgba(0, 0, 0, 0.7);

  transform: translate(-50%, 0);
  overflow: hidden;
  z-index: 9998;
`;


