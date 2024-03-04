import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <ProductContainer>
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={`product/${product.id}`}>
            <Li>
              <div className="imgContainer">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="productInfo">
                <h3>{product.title}</h3>
              </div>
            </Li>
          </Link>
        ))}
      </ul>
    </ProductContainer>
  );
};

const Li = styled.li`
  background-color: var(--color-text-one);
  width: 300px;
  background-color: var(--color-primary);
  display: inline-block;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: var(--color-text-one);
    text-align: center;
  }

  p {
    color: var(--color-text-one);
    padding: 10px;
  }

  img {
    width: 100%;
    transition: transform 0.3s ease;
  }
  .imgContainer {
    border-radius: 5px 5px 0px 0px;
    max-height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .productInfo {
    margin: 5px;
  }
  :hover {
    background-color: #707070;
    img {
      transform: scale(1.1);
    }
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    justify-content: center;
    padding: 0;
    width: 100%;
  }

  li {
    height: 100%;
    width: 100%;
    max-width: 300px;
  }
`;

export default ProductList;
