import { ReactNode, createContext, useState } from "react";

interface CheckoutContextData {
  deliveryAddress: string;
  paymentMethod: string;
  deliveryCity: string;
  street: string;
  number: number;
  city: string;
  uf: string;
  setPaymentMethod: (payment: string) => void;
  handleStreetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUfChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaymentMethodChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleBairroChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextData);

export function CheckoutContextProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState<number>(0);
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");

  const deliveryAddress = `${street}, ${number}`;
  const deliveryCity = ` ${bairro} - ${city}, ${uf}`;

  const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleUfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUf(e.target.value);
  };

  const handlePaymentMethodChange = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setPaymentMethod(e.currentTarget.value);
  };

  const handleBairroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBairro(e.target.value);
  };

  return (
    <CheckoutContext.Provider
      value={{
        deliveryAddress,
        deliveryCity,
        paymentMethod,
        setPaymentMethod,
        street,
        uf,
        city,
        number,
        handleStreetChange,
        handleNumberChange,
        handleCityChange,
        handleUfChange,
        handlePaymentMethodChange,
        handleBairroChange,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
