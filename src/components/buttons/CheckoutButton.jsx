import styled from "styled-components";

export const CheckoutButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: #242424;
  border: none;
  color: var(--color-orange);
  font-weight: bold;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: var(--color-green);
    background-color: #333333;
  }
`;
