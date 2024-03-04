import React from "react";
import styled from "styled-components";
import { useStore } from "../../store/cartStore";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { useNavigate } from "react-router-dom";

const CartCheckout = () => {
  const navigate = useNavigate();
  const items = useStore((state) => state.items);
  const clearItems = useStore((state) => state.clearItems);

  const calcPrice = () => {
    let price = 0;
    items.map((item) => (price += item.discountedPrice));
    return price.toFixed(2);
  };

  const checkOut = () => {
    clearItems();
    navigate("/checkout-success");
  };

  if (items.length > 0) {
    return (
      <CheckoutBox>
        <TotalPrice>Total: {calcPrice()}</TotalPrice>
        <CheckoutButton onClick={checkOut}>Check Out</CheckoutButton>
      </CheckoutBox>
    );
  } else {
    return <div>No items!</div>;
  }
};

export default CartCheckout;

const CheckoutBox = styled.div`
  width: 100%;
  min-height: 55px;
  background-color: var(--color-secondary);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  align-items: center;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-orange);
  margin-left: 8px;
`;
