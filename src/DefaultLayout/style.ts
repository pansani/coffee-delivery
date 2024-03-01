import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;

  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
