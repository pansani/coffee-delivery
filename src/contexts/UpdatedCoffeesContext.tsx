import { createContext, useState, ReactNode } from "react";
import { coffees } from "../Coffees";

interface CoffeeData {
  image: string;
  name: string;
  description: string;
  type: string;
  value: number;
  id: number;
  quantity: number;
  isCold?: boolean;
  hasmilk?: boolean;
  hasMilk?: boolean;
  isAlcoholic?: boolean;
}

interface CoffeesContextValue {
  updatedCoffees: CoffeeData[];
  allCoffees: CoffeeData[];
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
}

export const UpdatedCoffeesContext = createContext<CoffeesContextValue>({
  updatedCoffees: [],
  allCoffees: [],
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
});

export function UpdatedCoffeesProvider({ children }: { children: ReactNode }) {
  const [allCoffees, setAllCoffees] = useState(coffees);

  const handleIncreaseQuantity = (id: number) => {
    setAllCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, quantity: coffee.quantity + 1 };
        }
        return coffee;
      })
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setAllCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id && coffee.quantity > 0
          ? { ...coffee, quantity: coffee.quantity - 1 }
          : coffee
      )
    );
  };

  const updatedCoffees = allCoffees.filter((coffee) => coffee.quantity > 0);

  return (
    <UpdatedCoffeesContext.Provider
      value={{
        updatedCoffees,
        allCoffees,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </UpdatedCoffeesContext.Provider>
  );
}
