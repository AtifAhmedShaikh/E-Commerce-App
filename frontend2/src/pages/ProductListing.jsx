import React from "react";
import Container from "../layouts/containers/Container";
import Heading from "../wrappers/Heading";
import ProductCard from "../components/cards/ProductCard";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Loader from "../components/Loader"
import { useSelector } from "react-redux";
const ProductListing = () => {
  const products=useSelector((state)=>state.products.data);
  const loading=useSelector((state)=>state.products.loading);
  return (
    <React.Fragment>
      <Header />
      <Heading label="Product Listing"/>
      <Container className="flex justify-around items-center flex-wrap gap-2 mb-5 py-5">
        {!loading&&<Loader/>}
        {products.map(product=>{
          return <ProductCard key={product._id} {...product}/>
        })}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ProductListing;
