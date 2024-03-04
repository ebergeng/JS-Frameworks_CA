import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <Loader />;
};

export default Spinner;

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

const Loader = styled.div`
  width: 80px;
  height: 80px;
  border-left: 5px solid var(--color-orange);
  border-top: 5px solid var(--color-orange);
  border-radius: 100%;
  position: absolute;
  animation: ${spin} 1.2s linear infinite;
`;
