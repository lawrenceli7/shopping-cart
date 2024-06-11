import styled from "styled-components";

const StyledShoppingCart = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
  }

  button {
    font-size: 15px;
    padding: 10px;
    margin: 1px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
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
      <button>Checkout</button>
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
