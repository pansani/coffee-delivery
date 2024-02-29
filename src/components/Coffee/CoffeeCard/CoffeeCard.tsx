import { MouseEventHandler } from "react";
import {
  BuyButton,
  BuyProductContainer,
  CoffeeType,
  CoffeesTypes,
  ProductContainer,
  ProductPrice,
  ProductQuantity,
} from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export interface CoffeeCardProps {
  coffeeImage: string;
  coffeeType: string;
  coffeeHasMilk: boolean | undefined | string;
  coffeeIsCold: boolean | undefined | string;
  coffeeIsAlcoholic: boolean | undefined | string;
  coffeeName: string;
  coffeeDescription: string;
  coffeeQuantity: number;
  increaseQuantity: MouseEventHandler<HTMLButtonElement>;
  decreaseQuantity: MouseEventHandler<HTMLButtonElement>;
}

export function CoffeeCard({
  coffeeImage,
  coffeeType,
  coffeeQuantity,
  coffeeName,
  coffeeIsAlcoholic,
  coffeeHasMilk,
  coffeeIsCold,
  coffeeDescription,
  decreaseQuantity,
  increaseQuantity,
}: CoffeeCardProps) {
  if (coffeeHasMilk) {
    coffeeHasMilk = "Com Leite";
  } else if (coffeeIsCold) {
    coffeeIsCold = "Gelado";
  } else if (coffeeIsAlcoholic) {
    coffeeIsAlcoholic = "Com Alcool";
  } else {
    coffeeHasMilk = undefined;
    coffeeIsCold = undefined;
    coffeeIsAlcoholic = undefined;
  }

  return (
    <ProductContainer>
      <img src={coffeeImage} />
      <CoffeesTypes>
        <CoffeeType>{coffeeType}</CoffeeType>
        {coffeeHasMilk && <CoffeeType>{coffeeHasMilk}</CoffeeType>}
        {coffeeIsCold && <CoffeeType>{coffeeIsCold}</CoffeeType>}
        {coffeeIsAlcoholic && <CoffeeType>{coffeeIsAlcoholic}</CoffeeType>}
      </CoffeesTypes>
      <h1>{coffeeName}</h1>
      <span>{coffeeDescription} </span>
      <BuyProductContainer>
        <ProductPrice>
          <p>R$</p>
          <p>9,90</p>
        </ProductPrice>
        <ProductQuantity>
          <button onClick={decreaseQuantity}>-</button>
          <p>{coffeeQuantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </ProductQuantity>
        <NavLink to="./checkout" title="Checkout">
          <BuyButton>
            <ShoppingCart weight="fill" size={20} />
          </BuyButton>
        </NavLink>
      </BuyProductContainer>
    </ProductContainer>
  );
}
