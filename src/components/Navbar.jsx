import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { handleScrollToBottom } from "../utils/scroll";

const StyledNavbar = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px;
  }

  background-color: lightgray;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color: blue;
  }
`;

const Navbar = ({ cartItemCount }) => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <StyledNavLink to={"/"}>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/shop"}>Shop</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/shop"} onClick={handleScrollToBottom}>
            Cart: {cartItemCount}
          </StyledNavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  cartItemCount: PropTypes.number,
};

export default Navbar;
