import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  DataRow,
  DeliveredContainer,
  DeliveryData,
  IconContainer,
} from "./style";

import DeliveryImage from "../../assets/delivery-image.svg";

//Turn the data dynamic and not static via props or createContext and Reducers <- (study this)

export function Delivered() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </DataRow>
          <DataRow>
            <IconContainer color="#DBAC2C">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </DataRow>
          <DataRow>
            <IconContainer color="#C47F17">
              <CurrencyDollar />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </DataRow>
        </DeliveryData>
        <img src={DeliveryImage}></img>
      </DeliveredContainer>
    </>
  );
}
