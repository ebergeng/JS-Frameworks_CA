import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductDetail from "../components/product/ProductDetail";
import ProductReview from "../components/product/ProductReview";
import Spinner from "../components/spinner/Spinner";

const ProductPage = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let params = useParams();

  const productUrl = `https://api.noroff.dev/api/v1/online-shop/${params.id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(productUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productData = await response.json();
        setProducts(productData);
      } catch (error) {
        console.error("error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <ProductDetail product={product} />
      <ProductReview product={product} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default ProductPage;
