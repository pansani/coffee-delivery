import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CoffeesContainer, CoffeesContainerTitle } from "./style";
import { coffees } from "../../../Coffees";
import { useState } from "react";

export function CoffeesContent() {
  const [productQuantity, setProductQuantity] = useState<{
    [key: number]: number;
  }>({});

  const handleIncreaseQuantity = (id: number) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (id: number) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: Math.max((prevQuantity[id] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <CoffeesContainerTitle>Nossos Cafés</CoffeesContainerTitle>
      <CoffeesContainer>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffeeName={coffee.name}
            coffeeDescription={coffee.description}
            coffeeImage={coffee.image}
            coffeeType={coffee.type}
            coffeeHasMilk={coffee.hasMilk}
            coffeeIsAlcoholic={coffee.isAlcoholic}
            coffeeIsCold={coffee.isCold}
            coffeeQuantity={productQuantity[coffee.id] || 0}
            increaseQuantity={() => handleIncreaseQuantity(coffee.id)}
            decreaseQuantity={() => handleDecreaseQuantity(coffee.id)}
          />
        ))}
      </CoffeesContainer>
    </>
  );
}
