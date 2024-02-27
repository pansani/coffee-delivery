import {
  CartAndPlaceContainer,
  CartButton,
  HeaderContainer,
  HeaderImg,
  PlaceContainer,
  PlaceName,
} from "./style";
import Logo from "../../assets/logo-coffee-delivery.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImg src={Logo} />
      <CartAndPlaceContainer>
        <PlaceContainer>
          <MapPin size={22} weight="fill" />
          <PlaceName>Goiania, GO</PlaceName>
        </PlaceContainer>
        <NavLink to="./Checkout" title="Checkout">
          <CartButton>
            <ShoppingCart size={18} weight="fill" />
          </CartButton>
        </NavLink>
      </CartAndPlaceContainer>
    </HeaderContainer>
  );
}
