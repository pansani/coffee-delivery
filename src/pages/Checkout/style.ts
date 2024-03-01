import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;

    padding: 1rem;
  }

  div {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-left: 5px;

    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 300;
    margin-left: 27px;
    margin-top: 5px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    @media (max-width: 768px) {
      margin-top: 10px;
    }

    input {
      background: ${(props) => props.theme["base-input"]};
      border: none;

      max-width: 560px;
      height: 2.625rem;
      padding: 10px;

      @media (max-width: 768px) {
        height: 2rem;

        font-size: 10px;
      }
    }

    input[placeholder="CEP"] {
      width: 12.5rem;
      display: block;

      @media (max-width: 768px) {
        width: 8rem;
        display: inline-block;
      }
    }

    input[placeholder="Rua"] {
      width: 100%;
      display: block;
    }

    input[placeholder="Numero"] {
      width: 12.5rem;

      @media (max-width: 768px) {
        width: 8rem;
      }
    }

    input[placeholder="Complemento"] {
      width: 21.5rem;

      @media (max-width: 768px) {
        width: 12rem;
      }
    }
    input[placeholder="Bairro"] {
      width: 12.5rem;

      @media (max-width: 768px) {
        width: 8rem;
      }
    }

    input[placeholder="UF"] {
      width: 3.75rem;
    }

    input[placeholder="Cidade"] {
      width: 16.8rem;

      @media (max-width: 768px) {
        width: 12rem;
      }
    }
  }
`;

export const StyledMapPinLine = styled(MapPinLine)`
  padding-top: 8px;
`;

export const StyledCurrencyDollar = styled(CurrencyDollar)`
  padding-top: 8px;
`;

export const PaymentFormConatiner = styled.div`
  width: 40rem;
  height: 13rem;

  margin-top: 15px;

  background-color: ${(props) => props.theme["base-card"]};

  padding: 2.5rem;

  color: ${(props) => props.theme.purple};

  @media (max-width: 768px) {
    width: 100%;

    padding: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-left: 5px;

    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 300;
    margin-left: 27px;
    margin-top: 3px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
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

    @media (max-width: 768px) {
      width: 6.5rem;
    }

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

  @media (max-width: 768px) {
    width: 21rem;

    padding: 5px;
  }

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

  @media (max-width: 768px) {
    position: relative;

    min-height: 20rem;
    width: 100%;

    margin-bottom: 25px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
