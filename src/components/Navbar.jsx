import {
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { handleScrollToBottom } from "../utils/scroll";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: lightgray;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color: blue;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 30px;
`;

const StyledSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
`;

const Navbar = ({ cartItemCount }) => {
  return (
    <StyledNavbar>
      <StyledSpan>Fake Store</StyledSpan>
      <StyledDiv>
        <StyledNavLink to={"/"}>
          <HomeOutlined />
          Home
        </StyledNavLink>
        <StyledNavLink to={"/shop"}>
          <ShopOutlined />
          Shop
        </StyledNavLink>
        <StyledNavLink to={"/shop"} onClick={handleScrollToBottom}>
          <ShoppingCartOutlined />
          Cart: {cartItemCount}
        </StyledNavLink>
      </StyledDiv>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  cartItemCount: PropTypes.number,
};

export default Navbar;
