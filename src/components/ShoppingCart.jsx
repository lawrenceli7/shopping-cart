import { Button, Card } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledShoppingCart = styled(Card)`
  border: 1px solid black;
  margin: 10px;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const ShoppingCart = ({ cart }) => {
  const getTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <StyledShoppingCart>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${getTotal()}</h3>
      <Button>Checkout</Button>
    </StyledShoppingCart>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default ShoppingCart;
