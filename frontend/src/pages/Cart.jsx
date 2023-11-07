import React from "react";
import { wrapper, container, col } from "../styles/Cart.module.css"
import CartItem from "../components/cards/CartItem";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
const OverviewWrapper = () => {
    return (
        <div className={wrapper}>
            <div className={col}>
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
    const cartItems=useSelector((state)=>state.cart);
    return (
        <React.Fragment>
            <Header />
            <h4 className="text-center">Your Shopping Cart</h4>
            <div className={container}>
                <OverviewWrapper />
                {cartItems?.map(item => {
                    return <CartItem key={item._id} {...item} />
                })}
                <div className="d-flex gap-2">
                    <Button variant="success" className="rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" className="rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Cart;