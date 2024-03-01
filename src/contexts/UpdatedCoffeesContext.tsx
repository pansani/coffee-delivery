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
  cartItems?: CoffeeData[];
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveCoffee: (id: number) => void;
  handleSubmitCartCoffee: () => void;
  handleEmptyCart: () => void;
}

export const UpdatedCoffeesContext = createContext({} as CoffeesContextValue);

export function UpdatedCoffeesProvider({ children }: { children: ReactNode }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState<CoffeeData[]>([]);

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

    setCartItems(updatedCoffees);
  };

  const handleEmptyCart = () => {
    setAllCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => ({ ...coffee, quantity: 0 }))
    );
    setTotalQuantity(0);
    setCartItems([]);
  };
  return (
    <UpdatedCoffeesContext.Provider
      value={{
        updatedCoffees,
        allCoffees,
        totalValue,
        totalQuantity,
        cartItems,
        handleSubmitCartCoffee,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveCoffee,
        handleEmptyCart,
      }}
    >
      {children}
    </UpdatedCoffeesContext.Provider>
  );
}
