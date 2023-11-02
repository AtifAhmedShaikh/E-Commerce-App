import PropTypes from "prop-types"
import Stars from "../components/Stars";
import styles from "../styles/ProductDetails.module.css";
import CartContext from "../context/cart/Context";
import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchProductById } from "../services/products";
import QuantityButtons from "../components/QuantityButtons";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { handleQuantity } from "../utils/helper";
//product configuration component
const ProductConfiguration = ({ configuration }) => {
  return (
    <div className={styles.configuration}>
      <h5>Product Configurations</h5>
      <ul>
        {Object.keys(configuration).map((key, index) => {
          return (
            <li key={index}>
              <span>{key}</span>
              <span>{configuration[key]}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
//Image container component
const ImageContainer = ({ thumbnail, images }) => {
  const thumbnailImage = useRef(null);
  const handleShowRelatedImage = (image) => {
    thumbnailImage.current.src = image;
  }
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.main}>
        <img
          src={thumbnail}
          alt=""
          ref={thumbnailImage}
        />
      </div>
      <div className={styles.slider}>
        {images?.map((image, index) => {
          return <img src={image} key={index} onClick={() => handleShowRelatedImage(image)} />
        })}
      </div>
    </div>
  )
}
//Render complete details page component
const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isAddedInCart, setIsAddedInCart] = useState(false);//check product is already added in cart
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { id: productId } = useParams();
  //handle cart button to add product into cart context and Ensure doesn't product has already in cart
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
  // fetch and render product data by productId
  useEffect(() => {
    (async () => {
      const { data } = await fetchProductById(productId);
      if (data) {
        setProductInfo({ ...data, quantity: 1 });
      }
    })();
  }, [productId]);
  // Destructuring the properties of product to access individually
  const { images, thumbnail, description, title, stock, brand, category, discountPercentage, price } = productInfo;
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <ImageContainer thumbnail={thumbnail} images={images} />
        <div className={styles.contentWrapper}>
          <h5>{title}</h5>
          <p className="fw-bolder fs-5 m-0">
            {description}
          </p>
          <Stars />
          <p className="mt-2 mb-0">${price}</p>
          <ProductConfiguration configuration={{ stock, brand, discountPercentage, category }} />
          <QuantityButtons currentQuantity={productInfo.quantity} stock={stock} handleQuantity={handleQuantity} state={productInfo} setState={setProductInfo}/>
          <div className="d-flex gap-2 mt-2">
            {isAddedInCart ?
              <Button variant="warning" className="rounded-1" onClick={() => handleRemoveCartProduct()}>Remove From Cart</Button>
              :
              <Button variant="success" className="rounded-1" onClick={() => handleAddToCart()}>Add To Cart</Button>
            }
            <Button variant="primary" className="rounded-1">Add To Wishlist</Button>
          </div>
          <Button variant="primary" className="rounded-1 mt-2" onClick={() => navigate('/products')}>Continue Shopping</Button>
        </div>
      </div>
    </React.Fragment>
  );
};
//props validation of Product configuration
ProductConfiguration.propTypes = {
  configuration: PropTypes.object,
}
ImageContainer.propTypes = {
  thumbnail: PropTypes.string,
  images: PropTypes.array,
}
export default ProductDetails;