import { ReactNode, createContext, useState } from "react";

interface CheckoutContextData {
  deliveryAddress: string;
  paymentMethod: string;
  deliveryCity: string;
  street: string;
  number: number | undefined;
  city: string;
  uf: string;
  cep: string;
  bairro: string;
  complement: string;
  lastSubmittedValues: CheckoutContextFormData | undefined;
  setPaymentMethod: (payment: string) => void;
  handleStreetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUfChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaymentMethodChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleBairroChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCepChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleComplementChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void;
}

interface CheckoutContextFormData {
  deliveryAddress: string;
  paymentMethod: string;
  deliveryCity: string;
  street: string;
  number: number | undefined;
  city: string;
  uf: string;
  cep: string;
  bairro: string;
  complement: string;
}

export const CheckoutContext = createContext({} as CheckoutContextData);

export function CheckoutContextProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [complement, setComplement] = useState("");

  const [lastSubmittedValues, setLastSubmittedValues] = useState<
    CheckoutContextFormData | undefined
  >(undefined);

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

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleComplementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(e.target.value);
  };

  const handleEmptyFormValues = () => {
    setStreet("");
    setNumber(undefined);
    setCity("");
    setUf("");
    setBairro("");
    setCep("");
    setComplement("");
  };

  const handleFormSubmit = () => {
    setLastSubmittedValues({
      deliveryAddress,
      deliveryCity,
      paymentMethod,
      street,
      uf,
      city,
      number,
      cep,
      bairro,
      complement,
    });

    handleEmptyFormValues();
  };

  return (
    <CheckoutContext.Provider
      value={{
        deliveryAddress,
        deliveryCity,
        paymentMethod,
        street,
        uf,
        city,
        number,
        cep,
        bairro,
        complement,
        lastSubmittedValues,
        setPaymentMethod,
        handleStreetChange,
        handleNumberChange,
        handleCityChange,
        handleUfChange,
        handlePaymentMethodChange,
        handleBairroChange,
        handleCepChange,
        handleComplementChange,
        handleFormSubmit,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
