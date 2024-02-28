import { Trash } from "@phosphor-icons/react";
import Tradicional from "../../assets/tradicional.svg";
import {
  ButtonQuantity,
  CardCoffee,
  CoffeeButtons,
  CoffeeCardContainer,
  CoffeeData,
  RemoveButton,
} from "./style";

export function CheckoutCoffeeCard() {
  return (
    <CardCoffee>
      <CoffeeCardContainer>
        <img src={Tradicional} />
        <CoffeeData>
          <span>Expresso Tradicional</span>
          <CoffeeButtons>
            <ButtonQuantity type="button">--</ButtonQuantity>
            <div>1</div>
            <ButtonQuantity type="button">+</ButtonQuantity>
            <RemoveButton type="button">
              <Trash size={18} /> <span>REMOVER</span>
            </RemoveButton>
          </CoffeeButtons>
        </CoffeeData>
        <span>R$ 9,90</span>
      </CoffeeCardContainer>
      <hr></hr>
    </CardCoffee>
  );
}
