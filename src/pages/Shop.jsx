import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ShoppingCart from "../components/ShoppingCart";
import { fetchProducts } from "../utils/api";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <StyledGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </StyledGrid>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default Shop;
