import { Route, Routes } from "react-router-dom";
import { DefaultLayoult } from "./DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Delivered } from "./pages/Delivered";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoult />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout/delivered" element={<Delivered />}></Route>
      </Route>
    </Routes>
  );
}
