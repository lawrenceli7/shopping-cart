import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { fetchProducts } from "../utils/api";

const StyledDiv = styled.div`
  height: 100vh;
  background-color: #f0f0f0;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 35px;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const CarouselContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  border: 5px solid black;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 70%;
  margin: auto;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  width: 150px;
  margin: auto;
  margin-bottom: 15px;
  margin-top: 15px;

  &:hover {
    color: blue;
  }
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
      <StyledNavLink to="/shop">Shop Now</StyledNavLink>
      <Carousel autoplay style={{ marginLeft: "100px", marginRight: "100px" }}>
        {products.map((product) => (
          <CarouselContainer key={product.id}>
            <StyledImage src={product.image} alt={product.title} />
          </CarouselContainer>
        ))}
      </Carousel>
    </StyledDiv>
  );
};

export default Home;
