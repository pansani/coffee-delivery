import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CoffeesContainer, CoffeesContainerTitle } from "./style";
import { useContext } from "react";
import { UpdatedCoffeesContext } from "../../../contexts/UpdatedCoffeesContext";

export function CoffeesContent() {
  const { handleDecreaseQuantity, handleIncreaseQuantity, allCoffees } =
    useContext(UpdatedCoffeesContext);

  return (
    <>
      <CoffeesContainerTitle>Nossos Cafés</CoffeesContainerTitle>
      <CoffeesContainer>
        {allCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffeeName={coffee.name}
            coffeeDescription={coffee.description}
            coffeeImage={coffee.image}
            coffeeType={coffee.type}
            coffeeHasMilk={coffee.hasMilk}
            coffeeIsAlcoholic={coffee.isAlcoholic}
            coffeeIsCold={coffee.isCold}
            coffeeQuantity={coffee.quantity}
            increaseQuantity={() => handleIncreaseQuantity(coffee.id)}
            decreaseQuantity={() => handleDecreaseQuantity(coffee.id)}
          />
        ))}
      </CoffeesContainer>
    </>
  );
}
