import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";
import { UpdatedCoffeesProvider } from "./contexts/UpdatedCoffeesContext";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UpdatedCoffeesProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </UpdatedCoffeesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
