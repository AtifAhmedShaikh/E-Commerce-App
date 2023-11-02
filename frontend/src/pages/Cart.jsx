import React, { useContext } from "react";
import styles from "../styles/Cart.module.css"
import CartItem from "../components/cards/CartItem";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cart/Context";
import Header from "../components/Header";
const OverviewWrapper = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <span>Items</span>
                <span>Overview</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
            </div>
        </div>
    )
}
const Cart = () => {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext)
    return (
        <React.Fragment>
            <Header />
            <h4 className="text-center">Your Shopping Cart</h4>
            <div className={styles.container}>
                <OverviewWrapper/>
                {cartContext.cart?.map(item => {
                    return <CartItem key={item.id} {...item} />
                })}
                <div className="d-flex gap-2">
                    <Button variant="primary" bsPrefix="btn btn-primary rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" bsPrefix="btn btn-success rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Cart;
