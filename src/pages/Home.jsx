import { Carousel } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { fetchProducts } from "../utils/api";

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
};

const StyledDiv = styled.div`
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 15px;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;
`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <StyledDiv>
      <Navbar />
      <h1>Welcome to Fake Store</h1>
      <p>Find the best products here.</p>
      <Carousel autoplay>
        {products.map((product) => (
          <div key={product.id} style={contentStyle}>
            <StyledImage src={product.image} alt={product.title} />
          </div>
        ))}
      </Carousel>
    </StyledDiv>
  );
};

export default Home;
