import { Trash } from "@phosphor-icons/react";
import {
  ButtonQuantity,
  CardCoffee,
  CoffeeButtons,
  CoffeeCardContainer,
  CoffeeData,
  RemoveButton,
} from "./style";

interface CheckoutCoffeeCardProps {
  coffeeName: string;
  src: string;
  coffeeQuantity: number;
  coffeePrice: number;
  coffeeId: number;
  decreaseProduct: (id: number) => void;
  increaseProduct: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
}

export function CheckoutCoffeeCard({
  coffeeName,
  src,
  coffeeQuantity,
  coffeePrice,
  coffeeId,
  increaseProduct,
  decreaseProduct,
  handleDeleteProduct,
}: CheckoutCoffeeCardProps) {
  return (
    <CardCoffee>
      <CoffeeCardContainer>
        <img src={src} />
        <CoffeeData>
          <span>{coffeeName}</span>
          <CoffeeButtons>
            <ButtonQuantity
              type="button"
              onClick={() => decreaseProduct(coffeeId)}
            >
              --
            </ButtonQuantity>
            <div>{coffeeQuantity}</div>
            <ButtonQuantity
              type="button"
              onClick={() => increaseProduct(coffeeId)}
            >
              +
            </ButtonQuantity>
            <RemoveButton
              type="button"
              onClick={() => handleDeleteProduct(coffeeId)}
            >
              <Trash size={18} /> <span>REMOVER</span>
            </RemoveButton>
          </CoffeeButtons>
        </CoffeeData>
        <span>R${coffeePrice.toFixed(2)}</span>
      </CoffeeCardContainer>
      <hr></hr>
    </CardCoffee>
  );
}
