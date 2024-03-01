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
  totalValue: number;
  totalQuantity: number;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveCoffee: (id: number) => void;
  handleSubmitCartCoffee: () => void;
}

export const UpdatedCoffeesContext = createContext<CoffeesContextValue>({
  updatedCoffees: [],
  allCoffees: [],
  totalValue: 0,
  totalQuantity: 0,
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
  handleRemoveCoffee: () => {},
  handleSubmitCartCoffee: () => {},
});

export function UpdatedCoffeesProvider({ children }: { children: ReactNode }) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [allCoffees, setAllCoffees] = useState(
    coffees.map((coffee) => ({
      ...coffee,
      value: Number(coffee.value),
    }))
  );

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
  const handleRemoveCoffee = (id: number) => {
    setAllCoffees((prevCoffees) =>
      prevCoffees.filter((coffee) => coffee.id !== id)
    );
  };

  const updatedCoffees = allCoffees.filter((coffee) => coffee.quantity > 0);
  const totalValue = updatedCoffees.reduce(
    (total, coffee) => total + Number(coffee.value) * coffee.quantity,
    0
  );

  const handleSubmitCartCoffee = () => {
    const newTotalQuantity = updatedCoffees.reduce(
      (total, coffee) => total + coffee.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  };
  return (
    <UpdatedCoffeesContext.Provider
      value={{
        updatedCoffees,
        allCoffees,
        totalValue,
        totalQuantity,
        handleSubmitCartCoffee,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveCoffee,
      }}
    >
      {children}
    </UpdatedCoffeesContext.Provider>
  );
}
