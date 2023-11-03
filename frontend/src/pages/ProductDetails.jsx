import PropTypes from "prop-types"
import Stars from "../components/Stars";
import {container,configurationWrapper,contentWrapper} from "../styles/ProductDetails.module.css";
import CartContext from "../context/cart/Context";
import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { fetchProductById } from "../services/products";
import QuantityButtons from "../components/QuantityButtons";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { handleQuantity } from "../utils/handler";
import ImagesContainer from "../containers/ImagesContainer";
import WishListContext from "../context/wishList/Context";
//render product configuration object into List
const ProductConfiguration = ({ configurations }) => {
  return (
    <div className={configurationWrapper}>
      <h5>Product Configurations</h5>
      <ul>
        {Object.keys(configurations).map((key) => {
          return (
            <li key={key}>
              <span>{key}</span>
              <span>{configurations[key]}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
//Render complete details page component
const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isAddedInCart, setIsAddedInCart] = useState(false);//check product is already added in cart or not
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const wishList = useContext(WishListContext);
  const { id: productId } = useParams();//Get product Id from page url as productId
  //handle cart button to add product into cart by context and Ensure doesn't product has already in cart
  const handleAddToCart = () => {
    cartContext.setCart([...cartContext.cart, productInfo])
    setIsAddedInCart(true);
  }
  //handle remove the product from cart
  const handleRemoveCartProduct = () => {
    const filtered = cartContext.cart.filter(item => item.id !== productId)//remove the given product from cart
    cartContext.setCart([...filtered]);
    setIsAddedInCart(false);
  }
  //handle add to wish list to add the product into over wish list
  const handleAddToWishList=()=>{
    console.log(wishList)
    wishList.setWishList([...wishList.wishList,productInfo])
  }
  // fetch and render product data by productId in useEffect
  useEffect(() => {
    (async () => {
      const { data } = await fetchProductById(productId);
      console.log(data)
      if (!data) return;//If data does't have ! so return It
      console.log(data)
      setProductInfo({ ...data.products, quantity: 1 });
    })();
  }, [productId]);
  // Destructure the product data
  const { images, thumbnail, description, title, stock, brand, category, discountPercentage, price } = productInfo;
  return (
    <React.Fragment>
      <Header />
      <div className={container}>
        <ImagesContainer thumbnail={thumbnail} images={images} />
        <div className={contentWrapper}>
          <h5>{title}</h5>
          <p className="fw-bolder fs-5 m-0">
            {description}
          </p>
          <Stars />
          <p className="mt-2 mb-0">${price}</p>
          <ProductConfiguration configurations={{ stock, brand, discountPercentage, category }} />
          <QuantityButtons currentQuantity={productInfo.quantity} stock={stock} handleQuantity={handleQuantity} state={productInfo} setState={setProductInfo} />
          <div className="d-flex gap-2 mt-2">
            {isAddedInCart ?
              <Button variant="warning" className="rounded-1" onClick={() => handleRemoveCartProduct()}>Remove From Cart</Button>
              :
              <Button variant="success" className="rounded-1" onClick={() => handleAddToCart()}>Add To Cart</Button>
            }
            <Button variant="primary" className="rounded-1" onClick={()=>handleAddToWishList()}>Add To Wishlist</Button>
          </div>
          <Button variant="primary" className="rounded-1 mt-2" onClick={() => navigate('/products')}>Continue Shopping</Button>
        </div>
      </div>
    </React.Fragment>
  );
};
//props validation of Product configuration
ProductConfiguration.propTypes = {
  configurations: PropTypes.object,
}
export default ProductDetails;