import styled from "styled-components";
import CartCheckout from "../components/cart/CartCheckout";
import CartProduct from "../components/cart/CartProduct";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <CartProduct />
      <CartCheckout />
    </Wrapper>
  );
};

export default CheckoutPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
