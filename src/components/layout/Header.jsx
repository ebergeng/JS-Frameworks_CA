import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

function Header() {
  const Header = styled.header`
    background: linear-gradient(#000000, #949494d2);
    height: 55px;
    width: 100%;
    position: fixed;
    z-index: 99;
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      text-decoration: none;
      font-size: 28px;
      font-weight: bold;
      color: var(--color-orange);
      margin-left: 8px;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 25px;
      margin: 8px;
    }
  `;

  const LinkText = styled.span`
    text-decoration: none;
    color: #a8a8a8;
  `;

  const Li = styled.li`
    display: inline-block;
    text-decoration: none;
    font-size: 20px;

    :hover {
      text-decoration: underline;
      color: var(--color-orange);
    }
    .active {
      span {
        color: var(--color-text-one);
      }
    }
  `;

  const Ul = styled.ul`
    margin: 0;
  `;
  return (
    <Header>
      <Nav>
        <Link to={"/"}>
          <div className="logo">LOGO</div>
        </Link>
        <Ul>
          <Li>
            <NavLink to="/" exact="true" activeclassname="active">
              <LinkText>Home</LinkText>
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/contact" activeclassname="active">
              <LinkText>Contact</LinkText>
            </NavLink>
          </Li>
          <Li>
            <Link to={"/Cart"}>
              {" "}
              <CartIcon />
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export default Header;
