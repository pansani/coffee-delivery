import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme["base-card"]};

  position: relative;

  padding-top: 95px;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 10rem;
    height: 17rem;

    padding-top: 50px;
  }

  img {
    position: absolute;
    top: -20px;
    left: 30%;
    width: 7.5rem;
    height: 7.5rem;

    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;

      left: 24%;
    }
  }

  h1 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  span {
    width: 13.5rem;
    text-align: center;
    font-size: 14px;
    line-height: 130%;
    font-weight: 300;
    color: ${(props) => props.theme["base-label"]};
    padding-top: 15px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      width: 8.5rem;
      font-size: 12px;

      padding-top: 10px;

      margin-bottom: 15px;
    }
  }
`;

export const CoffeesTypes = styled.div`
  display: flex;
  gap: 5px;
`;

export const CoffeeType = styled.div`
  max-width: 5rem;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  font-size: 12px;

  padding: 3px;

  border-radius: 6px;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme["base-button"]};

  button {
    width: 1.5rem;
    height: 100%;
    border: none;
    cursor: pointer;
    background: transparent;

    @media (max-width: 768px) {
      width: 1rem;
    }
  }

  p {
    width: 1.5rem;
    text-align: center;

    @media (max-width: 768px) {
      width: 1rem;
    }
  }
`;

export const BuyProductContainer = styled.div`
  display: flex;

  width: 13rem;

  justify-content: space-between;

  @media (max-width: 768px) {
    width: 9.5rem;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};

  p {
    font-weight: 300;
    font-size: 12px;
  }

  p + p {
    font-weight: 800;
    margin-left: 3px;
    font-size: 16px;
  }
`;

export const BuyButton = styled.button`
  border: none;
  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme["purple-dark"]};
  color: white;

  cursor: pointer;
`;
