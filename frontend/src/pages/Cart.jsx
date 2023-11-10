import React from "react";
import { wrapper, col } from "../styles/Cart.module.css"
import CartItem from "../components/cards/CartItem";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import { useSelector } from "react-redux";
import Container from "../layouts/containers/Container";
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
            <Container className="justify-content-center align-items-center flex-column mb-2">
                <OverviewWrapper />
                {cartItems?.map(item => {
                    return <CartItem key={item._id} {...item} />
                })}
                <div className="d-flex gap-2">
                    <Button variant="success" className="rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" className="rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </Container>
        </React.Fragment>
    )
}
export default Cart;