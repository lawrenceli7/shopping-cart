import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Image, InputNumber } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const StyledProductCard = styled(Card)`
  border: 1px solid black;
  margin: 10px;
  text-align: center;
  background-color: #dcdcdc;

  h2 {
    font-size: 15px;
  }
`;

const StyledQuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 150px;
  margin: auto;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  bottom: 0;
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
      <Divider style={{ backgroundColor: "white" }} />
      <StyledImage src={product.image} alt={product.title} />
      <StyledDiv>
        <p>${product.price}</p>
        <StyledQuantityControls>
          <Button onClick={decrementQuantity}>-</Button>
          <InputNumber
            value={quantity}
            defaultValue={1}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button onClick={incrementQuantity}>+</Button>
        </StyledQuantityControls>
        <Button onClick={() => addToCart(product, quantity)}>
          <ShoppingCartOutlined />
          Add to Cart
        </Button>
      </StyledDiv>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

export default ProductCard;
