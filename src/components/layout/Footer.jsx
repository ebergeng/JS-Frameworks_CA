import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  const Footer = styled.footer`
    background: linear-gradient(#949494d2, #000000);
    min-height: 15vh;
    width: 100%;
  `;

  const Nav = styled.nav``;

  const Li = styled.li`
    display: inline-block;
  `;

  const Ul = styled.ul`
    margin: 0;
  `;
  return (
    <Footer>
      <Nav>
        <Ul>
          <Li>
            <Link to={"/"}>Home</Link>
          </Li>
          <Li>
            <Link to={"/Contact"}>Contact</Link>
          </Li>
        </Ul>
      </Nav>
    </Footer>
  );
}

export default Footer;
