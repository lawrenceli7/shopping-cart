import { useState } from "react";
import styled from "styled-components";

const StyledProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;

const StyledQuantityControls = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 15px;
    padding: 10px;
    margin: 1px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  input {
    font-size: 15px;
    padding: 10px;
    margin: 1px;
    border: none;
    background-color: #f0f0f0;
    width: 50px;
    text-align: center;
  }
`;

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <StyledProductCard>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <StyledQuantityControls>
        <button onClick={decrementQuantity}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={incrementQuantity}>+</button>
      </StyledQuantityControls>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </StyledProductCard>
  );
};

export default ProductCard;
