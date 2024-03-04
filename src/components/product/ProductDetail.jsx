import React from "react";
import styled from "styled-components";
import { useStore } from "../../store/cartStore";
import { PrimaryButton } from "../buttons/PrimaryButton";

const ProductDetail = (item) => {
  const setNewItem = useStore((state) => state.setItems);
  const product = item.product;

  const addItem = (item) => {
    setNewItem(item);
  };

  return (
    <ProductContainer>
      <ImgContainer>
        <img src={product.imageUrl} alt={product.title} />
      </ImgContainer>
      <TextContainer>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </TextContainer>
      <PriceContainer>
        <div className="priceArea">
          {product.price > product.discountedPrice && (
            <span className="originalPrice">{product.price},-</span>
          )}
          <span>{product.discountedPrice},-</span>
        </div>
        <div>
          <PrimaryButton onClick={() => addItem(product)}>
            Add to cart
          </PrimaryButton>
        </div>
      </PriceContainer>
    </ProductContainer>
  );
};

const PriceContainer = styled.div`
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-orange);
  font-size: 22px;

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

const ImgContainer = styled.div`
  margin: auto;
  display: flex;
  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: var(--color-text-one);
  }
  p {
    color: var(--color-text-two);
  }
`;

const ProductContainer = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  max-width: 800px;
  min-height: 300px;
  height: fit-content;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  overflow: hidden;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ProductDetail;
