import React, { useEffect, useState } from "react";
import QuantityButtons from "../components/QuantityButtons";
import Header from "../components/Header";
import ImagesContainer from "../containers/ImagesContainer";
import RatingStars from "../components/RatingStars";
import ProductConfigWrapper from "../wrappers/ProductConfigWrapper";
import { container, contentWrapper } from "../styles/ProductDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  addWishListItem,
  removeCartItem,
  removeWishListItem,
} from "../store/slice/slice";
import useProductById from "../hooks/useProductById";
//Render complete product detail page component
const ProductDetails = () => {
  const { id: productId } = useParams(); //Get product Id from page url as productId
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useProductById(productId); //Get product by Id using custom hook
  const [productInfo, setProductInfo] = useState({ ...product }); //Initialize state for product

  useEffect(() => setProductInfo({ ...product, quantity: 1 }), [product, productId]);

  // handle cart button to add product into cart and Ensure doesn't product has already in cart
  const handleAddToCart = () => {
    dispatch(addCartItem({ item: { ...productInfo } }));
    setProductInfo({ ...productInfo, isAddedInCart: true });
  };
  // handle remove button to product from cart
  const handleRemoveButton = (productId) => {
    dispatch(removeCartItem({ id: productId }));
    setProductInfo({ ...productInfo, isAddedInCart: false });
  };
  // handle add to wish list button to add the product into wish list
  const handleAddToWishList = () => {
    dispatch(addWishListItem({ item: { ...productInfo } }));
    setProductInfo({...productInfo,isAddedInWishList:true});
  };
  // handle remove item from wishlist
  const handleRemoveToWishList=(productId)=>{
    dispatch(removeWishListItem({id:productId}));
    setProductInfo({...productInfo,isAddedInWishList:false});
  }
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
      <div className={container}>
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
          <div className="d-flex gap-2 mt-2">
            {isAddedInCart ? (
              <Button
                variant="warning"
                className="rounded-1"
                onClick={() => handleRemoveButton(productInfo.id)}
              >
                Remove to Cart
              </Button>
            ) : (
              <Button
                variant="success"
                className="rounded-1"
                onClick={() => handleAddToCart()}
              >
                Add To Cart
              </Button>
            )}
            {isAddedInWishList ? <Button
              variant="primary"
              className="rounded-1"
              onClick={() => handleRemoveToWishList()}
            >
              Add To Wishlist
            </Button> :
              <Button
                variant="danger"
                className="rounded-1"
                onClick={() => handleAddToWishList()}
              >
                remove To Wishlist
              </Button>}
          </div>
          <Button
            variant="primary"
            className="rounded-1 mt-2"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductDetails;
