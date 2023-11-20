import React from "react";
import Heading from "../../wrappers/Heading";
import Container from "./Container";
import ProductCard from "../../components/cards/ProductCard";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const PopularProducts = () => {
  const navigate=useNavigate();
  const popularProducts=useSelector((state)=>state.products.data);
  const loading=useSelector((state)=>state.products.loading);
  
  return (
    <React.Fragment>
      <Heading label="Popular Products"/>
        {!loading&&<Loader/>}
      <Container className="flex justify-around items-center flex-wrap gap-2 mb-5 py-5">
        {
          popularProducts.slice(0,20).map(product=>{
            return  <ProductCard key={product._id}  {...product} />
          })
        }
      </Container>
      <div className="flex justify-center items-center mb-3">
        <Button  className="bg-teal-600 text-gray-100 px-3 py-1 text-md rounded-md hover:bg-teal-400" onClick={()=>navigate('/products')}>See More Items</Button>
      </div>
    </React.Fragment>
  );
};

export default PopularProducts;
