import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  DataRow,
  DeliveredContainer,
  DeliveryData,
  IconContainer,
} from "./style";

import DeliveryImage from "../../assets/delivery-image.svg";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export function Delivered() {
  const { deliveryAddress, deliveryCity, paymentMethod } =
    useContext(CheckoutContext);

  return (
    <>
      <DeliveredContainer>
        <h1>Uhu! Pedido Confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <DeliveryData>
          <DataRow>
            <IconContainer color="#8047F8">
              <MapPin weight="fill" />
            </IconContainer>
            <div>
              <p>
                Entrega em <strong>{deliveryAddress}</strong>
              </p>
              <span>{deliveryCity}</span>
            </div>
          </DataRow>
          <DataRow>
            <IconContainer color="#DBAC2C">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>30-40 minutos</strong>
            </div>
          </DataRow>
          <DataRow>
            <IconContainer color="#C47F17">
              <CurrencyDollar />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </div>
          </DataRow>
        </DeliveryData>
        <img src={DeliveryImage}></img>
      </DeliveredContainer>
    </>
  );
}
