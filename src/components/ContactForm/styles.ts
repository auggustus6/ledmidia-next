import styled, { css } from "styled-components";

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      span {
        display: none;
      }

      button {
        background: ${theme.colors.button};
        padding: 1.6rem 2.4rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${theme.colors.white};
        cursor: pointer;
      }
    }

    .input-error {
      border-color: #df4759;
    }
    .error {
      color: #df4759;
    }
    .disabled-btn {
      cursor: not-allowed;
      ${theme.colors.button};
    }

    .disabled-btn:hover {
      opacity: 0.9;
    }

    input {
      font-family: "Mukta";
      padding: 1.6rem;
      outline: none;
      width: 100%;
      border-radius: 8px;
      font-weight: 500;
      color: ${theme.colors.dark};
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;

      ::placeholder {
        color: #c2c2c2;
      }
    }
  `}
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;
