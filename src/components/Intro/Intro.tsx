import {
  CartIconContainer,
  CoffeeIconContainer,
  InfoContainer,
  InfoRowContainer,
  IntroContainer,
  IntroHeader,
  IntroImg,
  IntroSubtitle,
  IntroTitle,
  PackageIconContainer,
  RowOfIcons,
  TimerIconContainer,
} from "./style";

import IntroImage from "../../assets/intro-img.svg";

import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroHeader>
        {" "}
        <IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </IntroSubtitle>
      </IntroHeader>

      <InfoContainer>
        <RowOfIcons>
          <InfoRowContainer>
            <CartIconContainer>
              <ShoppingCart weight="fill" />
            </CartIconContainer>
            <span>Compra simples e segura</span>
          </InfoRowContainer>

          <InfoRowContainer>
            <PackageIconContainer>
              <Package />
            </PackageIconContainer>
            <span>Embalagem mantém o café intacto</span>
          </InfoRowContainer>
        </RowOfIcons>

        <RowOfIcons>
          <InfoRowContainer>
            <TimerIconContainer>
              <Timer weight="fill" />
            </TimerIconContainer>
            <span>Entrega rápida e rastreada</span>
          </InfoRowContainer>

          <InfoRowContainer>
            <CoffeeIconContainer>
              <Coffee weight="fill" />
            </CoffeeIconContainer>
            <span>O café chega fresquinho até você</span>
          </InfoRowContainer>
        </RowOfIcons>
      </InfoContainer>
      <IntroImg src={IntroImage} />
    </IntroContainer>
  );
}
