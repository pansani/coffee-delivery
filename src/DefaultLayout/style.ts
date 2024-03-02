import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;

  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
