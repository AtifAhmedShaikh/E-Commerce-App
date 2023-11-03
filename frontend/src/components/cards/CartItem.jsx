import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import CartContext from '../../context/cart/Context';
import QuantityButtons from '../QuantityButtons';
import {item,descriptionWrapper} from "../../styles/Cart.module.css"
import { handleQuantity } from '../../utils/handler';
const CartItem = (props) => {
  const [cartData, setCartData] = useState({...props});
  const cartContext=useContext(CartContext);
  // handle remove button to remove the product from cart by product ID
  const handleRemoveButton=(productId)=>{
    const filtered=cartContext.cart.filter(item=>item.id!==productId)//remove the given product from cart
    cartContext.setCart([...filtered]);
  }
//Destructure the product data 
const { title, description, price, category,quantity,thumbnail, stock,id }=cartData;
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
        <QuantityButtons currentQuantity={quantity} stock={stock} handleQuantity={handleQuantity} state={cartData} setState={setCartData}/>
        <div>
          <p>
            ${price * quantity}
          </p>
        </div>
        <div>
          <button className='cut-button'  onClick={()=>handleRemoveButton(id)}>
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
