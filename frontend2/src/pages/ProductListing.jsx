import React from "react";
import Container from "../layouts/containers/Container";
import Heading from "../wrappers/Heading";
import ProductCard from "../components/cards/ProductCard";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
const ProductListing = () => {
  return (
    <React.Fragment>
      <Header />
      <Heading />
      <Container className="flex justify-around items-center flex-wrap gap-2 mb-5 py-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ProductListing;
