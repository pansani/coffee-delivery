import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 20px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderImg = styled.img`
  width: 5.313rem;
  height: 2.5rem;
`;

export const CartAndPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const PlaceContainer = styled.div`
  width: 9rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3px;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border: 0;
  border-radius: 6px;

  position: relative;

  div {
    width: 1rem;
    height: 1rem;

    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};

    border-radius: 50%;

    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -7px;
    right: -7px;
  }
`;

export const PlaceName = styled.span`
  color: ${(props) => props.theme["purple-dark"]};
`;
