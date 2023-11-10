import React, { useEffect, useState } from "react";
import QuantityButtons from "../components/QuantityButtons";
import Header from "../layouts/Header";
import ImagesContainer from "../layouts/containers/ImagesContainer";
import RatingStars from "../components/RatingStars";
import ProductConfigWrapper from "../wrappers/ProductConfigWrapper";
import AddButtons from "../components/AddButtons";
import { fetchProductById } from "../services/products";
import { contentWrapper } from "../styles/ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../layouts/containers/Container";
//Render complete product detail page component
const ProductDetails = () => {
  const { id: productId } = useParams(); //Get product Id from page url as productId
  const cart=useSelector((state)=>state.cart);//Get shopping cart items
  const wishList=useSelector((state)=>state.wishList);//Get wish list
  const [productInfo, setProductInfo] = useState({}); //Initialize state for product
  useEffect(() =>{
    (async ()=>{
      const response=await fetchProductById(productId);
      const isAddedInCart=await cart.some(item=>item._id===productId);
      const isAddedInWishList=await wishList.some(item=>item._id===productId);
      setProductInfo({...response.data.product,isAddedInCart,isAddedInWishList,quantity:1});
    })();
  },[productId,cart,wishList]);
  // Destructure the Complete product data
  const {
    title,
    description,
    rating,
    price,
    configuration,
    mainImage,
    relatedImages,
    isAddedInCart,
    isAddedInWishList,
  } = productInfo;
  return (
    <React.Fragment>
      <Header />
      <Container className="justify-content-center align-items-start gap-2 py-3 px-0">
        <ImagesContainer thumbnail={mainImage} images={relatedImages} />
        <div className={contentWrapper}>
          <h5>{title}</h5>
          <p className="fw-bolder fs-5 m-0">{description}</p>
          <RatingStars rating={rating} />
          <p className="mt-2 mb-0">${price}</p>
          <ProductConfigWrapper configuration={{ ...configuration }} />
          <QuantityButtons
            currentQuantity={productInfo.quantity}
            stock={30}
            state={productInfo}
            setState={setProductInfo}
          />
          <AddButtons isAddedInCart={isAddedInCart} isAddedInWishList={isAddedInWishList} productState={productInfo}setProductState={setProductInfo}/>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default ProductDetails;
