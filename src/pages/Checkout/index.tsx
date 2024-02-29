// For adding a coffee in the card, i will use tge following logic:
// If the quantity of the coffe is > 0 then, the id of the coffee that the quantity is more than 0 will be displayed;
// Use react-hoof-form and zod to the adress form
// I have to also to find a way to update the updatedCoffes from this file here because of the remove button in the Cart

import { NavLink } from "react-router-dom";
import { CheckoutCoffeeCard } from "../../components/ChekoutCoffeeCard";
import {
  AdressFormContainer,
  ButtonsPaymentContainer,
  CheckoutContainer,
  CheckoutFormsContainer,
  PaymentFormConatiner,
  PriceData,
  ProductsCheckoutContainer,
  SubmitCheckoutButton,
} from "./style";
import {
  Bank,
  Cards,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import { coffees } from "../../Coffees";

// Split this HTML code into more components, the code is too repetitive and too big
// Find a simple way to get the data of the coffes that has a quantity bigger than 0

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <CheckoutFormsContainer>
          <span>Complete seu pedido</span>
          <AdressFormContainer>
            <div>
              <MapPinLine size={22} />
              <span>Endereco de entrega</span>
              <p>Informe o endereco onde deseja receber seu pedido</p>
            </div>
            <form>
              <input
                type="number"
                placeholder="CEP"
                minLength={8}
                maxLength={8}
              ></input>
              <input type="text" placeholder="Rua"></input>
              <input type="text" placeholder="Numero"></input>
              <input type="text" placeholder="Complemento"></input>
              <input type="text" placeholder="Bairro"></input>
              <input type="text" placeholder="Cidade"></input>
              <input type="text" placeholder="UF"></input>
            </form>
          </AdressFormContainer>
          <PaymentFormConatiner>
            {" "}
            <CurrencyDollar size={22} />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <ButtonsPaymentContainer>
              <div>
                <button type="button">
                  <Cards /> <p>CARTÃO DE CRÉDITO</p>
                </button>
              </div>
              <div>
                <button type="button">
                  <Bank /> <p>CARTÃO DE DÉBITO</p>
                </button>
              </div>
              <div>
                <button type="button">
                  {" "}
                  <Money /> <p>DINHEIRO</p>
                </button>
              </div>
            </ButtonsPaymentContainer>
          </PaymentFormConatiner>
        </CheckoutFormsContainer>
        <ProductsCheckoutContainer>
          <div>
            {coffees.map((coffee) => {
              if (coffee.quantity > 0) {
                return (
                  <CheckoutCoffeeCard
                    coffeeName={coffee.name}
                    src={coffee.image}
                    coffeeQuantity={coffee.quantity}
                    coffeePrice={coffee.value}
                  />
                );
              }
              return null;
            })}
          </div>
          <PriceData>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </PriceData>
          <NavLink to="./Delivered" title="Delivered">
            <SubmitCheckoutButton type="submit">
              CONFIRMAR PEDIDO
            </SubmitCheckoutButton>
          </NavLink>
        </ProductsCheckoutContainer>
      </CheckoutContainer>
    </>
  );
}
