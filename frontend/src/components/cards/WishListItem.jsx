import React,{ useState } from "react";
import { item } from "../../styles/WishListItem.module.css";
import QuantityButtons from "../QuantityButtons";
import { useDispatch, } from "react-redux";
import { removeWishListItem } from "../../store/slice/slice";
const WishListItem = (props) => {
  const [product, setProduct] = useState({ ...props });
  const dispatch = useDispatch();
  // handle remove button to remove the specific one product from wish list by product ID
  const handleRemoveButton = (productId) => {
    dispatch(removeWishListItem({ id: productId }));
  };
  // Destructure the product data
  const {
    title,
    price,
    category,
    quantity,
    mainImage,
    configuration,
    _id,
  } = product;
  return (
    <React.Fragment>
      <div className={item}>
        <img src={mainImage} alt="" />
        <div>
          <h5>{title}</h5>
          <p>{category}</p>
        </div>
        <p>${price}</p>
        <QuantityButtons
          currentQuantity={quantity}
          stock={configuration.stock}
          state={product}
          setState={setProduct}
        />
        <p>${price * quantity}</p>
        <div>
          <button
            className="cut-button bg-transparent text-danger"
            onClick={() => handleRemoveButton(_id)}
          >
            X
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishListItem;
