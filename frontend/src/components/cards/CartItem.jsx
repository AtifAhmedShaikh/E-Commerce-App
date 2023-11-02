import React, { useContext, useState } from 'react'
import {item,descriptionWrapper} from "../../styles/Cart.module.css"
import PropTypes from 'prop-types'
import CartContext from '../../context/cart/Context';
import QuantityButtons from '../QuantityButtons';
import { handleQuantity } from '../../utils/helper';
const CartItem = ({ title, description, price, quantity, category, thumbnail, stock,id }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const cartContext=useContext(CartContext);
  const handleRemoveCartProduct=(productId)=>{
    const filtered=cartContext.cart.filter(item=>item.id!==productId)//remove the given product from cart
    cartContext.setCart([...filtered]);
  }
  return (
    <React.Fragment>
      <div className={item}>
        <img src={thumbnail} alt="" />
        <div className={descriptionWrapper}>
          <h5>{title}</h5>
          <p className='m-0'>
            {description}
          </p>
          <p>
            {category}
          </p>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <QuantityButtons currentQuantity={currentQuantity} handleQuantity={handleQuantity} stock={stock} state={{quantity:quantity}} setState={setCurrentQuantity}/>
        <div>
          <p>
            ${price * currentQuantity}
          </p>
        </div>
        <div>
          <button className='cut-button'  onClick={()=>handleRemoveCartProduct(id)}>
            X
          </button>
        </div>
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
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
  id: PropTypes.number,
}
export default CartItem
