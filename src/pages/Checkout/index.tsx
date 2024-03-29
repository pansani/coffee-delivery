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
  StyledCurrencyDollar,
  StyledMapPinLine,
  SubmitCheckoutButton,
} from "./style";
import { Bank, Cards, Money } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { UpdatedCoffeesContext } from "../../contexts/UpdatedCoffeesContext";

export function Checkout() {
  const {
    handleStreetChange,
    handleNumberChange,
    handleUfChange,
    handleCityChange,
    handlePaymentMethodChange,
    handleBairroChange,
    handleCepChange,
    handleComplementChange,
    handleFormSubmit,
    bairro,
    city,
    complement,
    number,
    street,
    uf,
    cep,
    paymentMethod,
  } = useContext(CheckoutContext);

  const {
    cartItems,
    totalValue,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveCoffee,
  } = useContext(UpdatedCoffeesContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (street && number && city && uf && bairro && cep && paymentMethod) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [street, number, city, uf, bairro, cep, paymentMethod]);

  const totalPlusDelivery = totalValue + 3.5;
  return (
    <>
      <CheckoutContainer>
        <CheckoutFormsContainer>
          <span>Complete seu pedido</span>
          <AdressFormContainer>
            <div>
              <StyledMapPinLine size={22} />
              <span>Endereco de entrega</span>
              <p>Informe o endereco onde deseja receber seu pedido</p>
            </div>
            <form>
              <input
                type="number"
                placeholder="CEP"
                minLength={8}
                maxLength={8}
                onChange={handleCepChange}
                value={cep}
              ></input>
              <input
                type="text"
                placeholder="Rua"
                onChange={handleStreetChange}
                value={street}
              />
              <input
                type="text"
                placeholder="Numero"
                onChange={handleNumberChange}
                value={number}
              />
              <input
                type="text"
                placeholder="Complemento"
                onChange={handleComplementChange}
                value={complement}
              ></input>
              <input
                type="text"
                placeholder="Bairro"
                onChange={handleBairroChange}
                value={bairro}
              ></input>
              <input
                type="text"
                placeholder="Cidade"
                onChange={handleCityChange}
                value={city}
              />
              <input
                type="text"
                placeholder="UF"
                onChange={handleUfChange}
                value={uf}
              />
            </form>
          </AdressFormContainer>
          <PaymentFormConatiner>
            {" "}
            <StyledCurrencyDollar size={22} />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <ButtonsPaymentContainer>
              <div>
                <button
                  type="button"
                  value="cartao-de-credito"
                  onClick={handlePaymentMethodChange}
                >
                  <Cards /> <p>CARTÃO DE CRÉDITO</p>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  value="Cartão de débito"
                  onClick={handlePaymentMethodChange}
                >
                  <Bank /> <p>CARTÃO DE DÉBITO</p>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  value="Dinheiro"
                  onClick={handlePaymentMethodChange}
                >
                  {" "}
                  <Money /> <p>DINHEIRO</p>
                </button>
              </div>
            </ButtonsPaymentContainer>
          </PaymentFormConatiner>
        </CheckoutFormsContainer>
        <ProductsCheckoutContainer>
          <div>
            {cartItems!.map((coffee) => (
              <CheckoutCoffeeCard
                key={coffee.id}
                coffeeName={coffee.name}
                src={coffee.image}
                coffeeQuantity={coffee.quantity}
                coffeePrice={coffee.value}
                coffeeId={coffee.id}
                increaseProduct={() => handleIncreaseQuantity(coffee.id)}
                decreaseProduct={() => handleDecreaseQuantity(coffee.id)}
                handleDeleteProduct={() => handleRemoveCoffee(coffee.id)}
              />
            ))}
          </div>
          <PriceData>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalValue.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ {totalPlusDelivery.toFixed(2)}</span>
            </div>
          </PriceData>
          <NavLink to="./Delivered" title="Delivered">
            <SubmitCheckoutButton
              type="submit"
              disabled={isButtonDisabled}
              isDisabled={isButtonDisabled}
              onClick={handleFormSubmit}
            >
              CONFIRMAR PEDIDO
            </SubmitCheckoutButton>
          </NavLink>
        </ProductsCheckoutContainer>
      </CheckoutContainer>
    </>
  );
}
