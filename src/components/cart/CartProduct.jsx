import React from "react";
import { useStore } from "../../store/cartStore";
import styled from "styled-components";
import TrashCanIcon from "./TrashCanIcon";

const CartProduct = () => {
  const cartItems = useStore((state) => state.items);
  const deleteItem = useStore((state) => state.removeOneItem);

  const removeItem = (id) => {
    deleteItem(id);
  };

  return (
    <Wrapper>
      {cartItems.map((item) => (
        <ProductContainer key={item.id}>
          <ImgContainer>
            <img src={item.imageUrl} alt="" />
          </ImgContainer>
          <TextContainer>{item.title}</TextContainer>
          <PriceContainer>
            {item.discountedPrice}
            <DeleteButton onClick={() => removeItem(item.id)}>
              <TrashCanIcon />
            </DeleteButton>
          </PriceContainer>
        </ProductContainer>
      ))}
    </Wrapper>
  );
};

const DeleteButton = styled.button`
  background: transparent;
  border: none;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  max-width: 800px;
  height: 100px;
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  margin-top: 8px;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
`;

const ImgContainer = styled.div`
  margin: auto;
  width: 70px;
  box-sizing: border-box;
  img {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  text-align: center;
  color: var(--color-text-one);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PriceContainer = styled.div`
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-orange);
  font-size: 22px;
  padding-left: 10px;
  padding-right: 10px;
  .priceArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .originalPrice {
    color: var(--color-text-one);
    text-decoration: line-through;
    font-size: 16px;
  }
`;

export default CartProduct;
