import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuantityButtons from '../QuantityButtons';
import { item, descriptionWrapper } from "../../styles/Cart.module.css"
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/slice/slice';
const CartItem = (props) => {
  const [product, setProduct] = useState({ ...props });//Get cart product data from props
  const dispatch = useDispatch();
  // handle remove button to remove the product from cart by product ID
  const handleRemoveButton = (productId) => {
    dispatch(removeCartItem({ id: productId }))
  }
  //Destructure the product data
  const { title, description, price, category, quantity, mainImage, _id ,configuration} = product;
  return (
    <React.Fragment>
      <div className={item}>
        <img src={mainImage} alt="" />
        <div className={descriptionWrapper}>
          <h5>{title}</h5>
          <p className='m-0'>
            {description}
          </p>
          <p>
            {category}
          </p>
        </div>
        <p>${price}</p>
        <QuantityButtons currentQuantity={quantity} stock={configuration.stock} state={product} setState={setProduct} />
        <p>
          ${price * quantity}
        </p>
        <button className='cut-button' onClick={() => handleRemoveButton(_id)}>
          X
        </button>
      </div>
    </React.Fragment>
  )
}
CartItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  category: PropTypes.string,
  mainImage: PropTypes.string,
  _id: PropTypes.string,
}
export default CartItem
