import { Trash } from "@phosphor-icons/react";
import {
  ButtonQuantity,
  CardCoffee,
  CoffeeButtons,
  CoffeeCardContainer,
  CoffeeData,
  RemoveButton,
} from "./style";

//Pass props to data of this component and create a way to pick only the coffees objects that have a quantity > 0

interface CheckoutCoffeeCardProps {
  coffeeName: string;
  src: string;
  coffeeQuantity: number | null;
  coffeePrice: number;
}

export function CheckoutCoffeeCard({
  coffeeName,
  src,
  coffeeQuantity,
  coffeePrice,
}: CheckoutCoffeeCardProps) {
  return (
    <CardCoffee>
      <CoffeeCardContainer>
        <img src={src} />
        <CoffeeData>
          <span>{coffeeName}</span>
          <CoffeeButtons>
            <ButtonQuantity type="button">--</ButtonQuantity>
            <div>{coffeeQuantity}</div>
            <ButtonQuantity type="button">+</ButtonQuantity>
            <RemoveButton type="button">
              <Trash size={18} /> <span>REMOVER</span>
            </RemoveButton>
          </CoffeeButtons>
        </CoffeeData>
        <span>{coffeePrice}</span>
      </CoffeeCardContainer>
      <hr></hr>
    </CardCoffee>
  );
}
