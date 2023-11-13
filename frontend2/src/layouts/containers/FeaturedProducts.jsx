import React from "react";
import Heading from "../../wrappers/Heading";
import Container from "./Container";
import ProductCard from "../../components/cards/ProductCard";

const FeaturedProducts = () => {
  return (
    <React.Fragment>
      <Heading />
      <Container className="flex justify-around items-center flex-wrap gap-2 mb-5 py-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
      <div className="flex justify-center items-center mb-3">
        <button className="bg-blue-700 px-3 py-1 text-md rounded-sm text-gray-100">
          See More Items
        </button>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
