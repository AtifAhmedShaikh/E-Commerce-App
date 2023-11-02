import { useState } from "react"
import CartContext from "./Context";
import PropTypes from 'prop-types'

const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
CartState.propTypes = {
  children: PropTypes.object
}
export default CartState;
