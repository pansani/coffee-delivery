import styled from "styled-components";

export const CardCoffee = styled.div`
  hr {
    margin-bottom: 20px;
  }
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  img {
    width: 4rem;
    margin-right: 10px;
  }

  span {
    height: 100%;
  }
`;

export const CoffeeData = styled.div``;

export const CoffeeButtons = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;

  span {
    color: #000;
    height: 16px;
    font-weight: 300;
  }

  div {
    width: 1.5rem;
    height: 2rem;

    background-color: ${(props) => props.theme["base-button"]};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonQuantity = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  border: none;

  color: ${(props) => props.theme.purple};

  width: 1.5rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  cursor: pointer;
`;

export const RemoveButton = styled(ButtonQuantity)`
  width: 5.688rem;

  font-size: 14px;

  margin-left: 20px;
`;
