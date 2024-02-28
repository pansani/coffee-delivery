import styled from "styled-components";

export const DeliveredContainer = styled.div`
  margin-top: 8%;
  position: relative;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-weight: bold;

    font-family: "Baloo 2", sans-serif;
  }

  img {
    position: absolute;
    top: 27%;
    right: 0;
  }
`;

export const DeliveryData = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  border: 1px solid #dbac2c;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  padding: 40px;

  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DataRow = styled.div`
  display: flex;
  gap: 5px;

  span {
    font-weight: 300;
  }
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.color};

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 3px;

  color: #fff;
`;
