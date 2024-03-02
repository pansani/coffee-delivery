import styled from "styled-components";

export const IntroContainer = styled.div`
  height: 34rem;

  margin-top: 8rem;

  position: relative;

  z-index: 2;
  @media (max-width: 768px) {
    height: 16.3rem;

    margin-top: 3rem;
  }
`;

export const IntroHeader = styled.div`
  width: 36.75rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme["base-title"]};

  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
  font-size: 48px;
  font-weight: bolder;
  z-index: 5;

  padding-bottom: 1.3rem;

  @media (max-width: 768px) {
    font-size: 20px;

    padding-bottom: 0.8rem;
  }
`;

export const IntroSubtitle = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};

  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 130%;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InfoContainer = styled.div`
  max-width: 36.75rem;
  height: 5.25rem;

  margin-top: 5rem;

  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
`;

export const CartIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const PackageIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme["base-text"]};
`;

export const TimerIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme.yellow};
`;

export const CoffeeIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme.purple};
`;

export const RowOfIcons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const InfoRowContainer = styled.div`
  width: 18.375rem;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    color: ${(props) => props.theme["base-text"]};
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const IntroImg = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  position: absolute;
  right: 0;
  top: 0;

  z-index: -1;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    opacity: 0;
  }
`;
