import styled from "styled-components";
import CheckOutSoccsessPng from "../assets/checkOutSuccsess.png";
import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <h2>Checkout</h2>
        <Image src={CheckOutSoccsessPng} />
        <h1>Succsess!</h1>
        <PrimaryButton onClick={() => navigate("/")}>Home</PrimaryButton>
      </Container>
    </Wrapper>
  );
};

export default CheckoutSuccessPage;

const Image = styled.img`
  width: 100%;
`;

const Container = styled.div`
  background-color: var(--color-secondary);
  text-align: center;
  box-shadow: var(--box-shadow);
  h1 {
    color: var(--color-green);
  }
  h2 {
    color: var(--color-orange);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
