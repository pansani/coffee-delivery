import Americano from "./assets/americano.svg";
import Arabe from "./assets/arabe.svg";
import CafeComLeite from "./assets/cafe-com-leite.svg";
import Capuccino from "./assets/capuccino.svg";
import Cremoso from "./assets/cremoso.svg";
import Gelado from "./assets/gelado.svg";
import Tradicional from "./assets/tradicional.svg";
import Latte from "./assets/latte.svg";
import Macchiato from "./assets/macchiato.svg";
import Mocaccino from "./assets/mochaccino.svg";
import ChocolateQuente from "./assets/chocolate-quente.svg";
import Cubano from "./assets/cubano.svg";
import Irlandes from "./assets/irlandes.svg";
import Havaiano from "./assets/havaiano.svg";

export const coffees = [
  {
    image: Tradicional,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: "Tradicional",
    value: 9.9,
    id: 0,
  },
  {
    image: Americano,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: "Tradicional",
    value: 9.9,
    id: 1,
  },
  {
    image: Cremoso,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    type: "Tradicional",
    value: 9.9,
    id: 2,
  },
  {
    image: Gelado,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    type: "Tradicional",
    isCold: true,
    value: 9.9,
    id: 3,
  },
  {
    image: CafeComLeite,
    name: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    type: "Tradicional",
    hasmilk: true,
    value: 9.9,
    id: 4,
  },
  {
    image: Latte,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: "Tradicional",
    hasMilk: true,
    value: 9.9,
    id: 5,
  },
  {
    image: Capuccino,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: "Tradicional",
    hasMilk: true,
    value: 9.9,
    id: 6,
  },
  {
    image: Macchiato,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: "Tradicional",
    hasMilk: true,
    value: 9.9,
    id: 7,
  },
  {
    image: Mocaccino,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    type: "Tradicional",
    hasMilk: true,
    value: 9.9,
    id: 8,
  },
  {
    image: ChocolateQuente,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    type: "Especial",
    value: 9.9,
    id: 9,
  },
  {
    image: Cubano,
    name: "Cubano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: "Especial",
    isAlcoholic: true,
    isCold: true,
    value: 9.9,
    id: 10,
  },
  {
    image: Havaiano,
    name: "Havaíano",
    description: "Bebida adocicada preparada com café e leite de coco",
    type: "Especial",
    value: 9.9,
    id: 11,
  },
  {
    image: Arabe,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    type: "Especial",
    value: 9.9,
    id: 12,
  },
  {
    image: Irlandes,
    name: "Irlandes",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: "Especial",
    isAlcoholic: true,
    value: 9.9,
    id: 13,
  },
];
