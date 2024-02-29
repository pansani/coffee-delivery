import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";
import { UpdatedCoffeesProvider } from "./contexts/UpdatedCoffeesContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UpdatedCoffeesProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </UpdatedCoffeesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
