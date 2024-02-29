import styled from "styled-components";

export const CheckoutContainer = styled.div`
  position: relative;
`;

export const CheckoutFormsContainer = styled.div`
  margin-top: 4rem;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const AdressFormContainer = styled.div`
  width: 40rem;
  height: 23.25rem;

  background-color: ${(props) => props.theme["base-card"]};

  margin-top: 1rem;
  padding: 2.5rem;

  div {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-left: 5px;

    font-weight: 300;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 300;
    margin-left: 27px;
    margin-top: 5px;
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    input {
      background: ${(props) => props.theme["base-input"]};
      border: none;

      max-width: 560px;
      height: 2.625rem;
      padding: 10px;
    }

    input[placeholder="CEP"] {
      width: 12.5rem;
      display: block;
    }

    input[placeholder="Rua"] {
      width: 100%;
      display: block;
    }

    input[placeholder="Numero"] {
      width: 12.5rem;
    }

    input[placeholder="Complemento"] {
      width: 21.5rem;
    }
    input[placeholder="Bairro"] {
      width: 12.5rem;
    }

    input[placeholder="UF"] {
      width: 3.75rem;
    }

    input[placeholder="Cidade"] {
      width: 16.8rem;
    }
  }
`;

export const PaymentFormConatiner = styled.div`
  width: 40rem;
  height: 13rem;

  margin-top: 15px;

  background-color: ${(props) => props.theme["base-card"]};

  padding: 2.5rem;

  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-left: 5px;

    font-weight: 300;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 300;
    margin-left: 27px;
    margin-top: 3px;
  }

  button {
    width: 11.167rem;
    height: 3.188rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border: none;

    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme.purple};

    cursor: pointer;

    p {
      font-size: 12px;
      margin-left: 0;
    }
  }
`;

export const ButtonsPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 35rem;

  margin-top: 32px;

  button:focus {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;

export const ProductsCheckoutContainer = styled.div`
  width: 28rem;
  min-height: 31.125rem;

  background-color: ${(props) => props.theme["base-card"]};

  position: absolute;
  right: 0;
  top: 0;

  margin-top: 37px;

  padding: 40px;
`;

export const PriceData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SubmitCheckoutButton = styled.button<{ isDisabled?: boolean }>`
  width: 23rem;
  height: 2.875rem;

  background-color: ${(props) =>
    props.isDisabled ? props.theme["yellow-light"] : props.theme.yellow};
  color: ${(props) =>
    props.isDisabled ? props.theme["base-subtitle"] : props.theme.white};

  margin-top: 30px;

  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  border: none;
`;
