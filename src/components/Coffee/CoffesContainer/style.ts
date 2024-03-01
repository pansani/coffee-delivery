import styled from "styled-components";

export const CoffeesContainer = styled.div`
  min-width: 70rem;
  height: 85rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  margin-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    min-width: 100%;

    margin-top: 40px;
  }
`;

export const CoffeesContainerTitle = styled.span`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-title"]};

  font-size: 30px;
  font-weight: 700;
`;
