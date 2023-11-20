import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ImagesWrapper from "../wrappers/ImagesWrapper";
import Container from "../layouts/containers/Container";
import QuantityWrapper from "../wrappers/QuantityWrapper";
import RatingStars from "../wrappers/RatingStars";
import Button from "../components/Button";
import ProductConfig from "../wrappers/ProductConfig";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../services/product";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  updateOrderDetails
} from "../store/actions/productSlice";
import Loader from "../components/Loader";
const ProductsDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { id: productId } = useParams();
  // handle add to cart button to add this product into shopping cart
  const handleCartButton = (e) => {
    dispatch(addCartItem({ item: productInfo }));
    dispatch(updateOrderDetails());
    e.target.innerText = "Added To Cart";
  };
  // fetch and set product details by use Effect in IEF
  useEffect(() => {
    (async () => {
      const response = await fetchProductById(productId);
      setProductInfo({ ...response.data.product, quantity: 1 });
      setLoading(false);
    })();
  }, [productId]);
  const {
    title,
    description,
    brand,
    price,
    category,
    configuration,
    relatedImages,
    mainImage,
    quantity,
  } = productInfo;
  if (loading) return <Loader />;
  return (
    <React.Fragment>
      <Header />
      <Container className="w-[100%] flex justify-center items-start">
        <ImagesWrapper mainImage={mainImage} relatedImages={relatedImages} />
        <div>
          <h4 className="font-normal text-xl">{category}</h4>
          <h1 className="font-bold text-2xl mb-3">{title}</h1>
          <h1 className="font-normal text-1xl mb-3">{brand}</h1>
          <p className="max-w-[75%]">{description}</p>
          <p className="font-normal text-xl">{price}</p>
          <RatingStars />
          <QuantityWrapper
            currentQuantity={quantity}
            state={productInfo}
            setState={setProductInfo}
          />
          <ProductConfig configuration={!configuration ? {} : configuration} />
          <Button
            className="bg-teal-500 px-2 rounded-sm text-gray-100 py-1 hover:bg-teal-700"
            onClick={handleCartButton}
          >
            Add To Cart
          </Button>
          <div>
            <Button
              className="bg-teal-500 px-2 rounded-sm text-gray-100  mt-2 py-1 hover:bg-teal-700"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ProductsDetails;
