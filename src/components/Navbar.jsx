import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>Cart: {cartItemCount}</li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default Navbar;
