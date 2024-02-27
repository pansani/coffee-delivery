import styled from "styled-components";

export const CoffeesContainer = styled.div`
  width: 70rem;
  height: 85rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  margin-top: 80px;
`;

export const CoffeesContainerTitle = styled.span`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-title"]};

  font-size: 30px;
  font-weight: 700;
`;
