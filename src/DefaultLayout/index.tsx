import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { LayoutContainer } from "./style";

export function DefaultLayoult() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
