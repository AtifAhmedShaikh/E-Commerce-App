import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/containers/Container";
import CartItem from "../components/cards/CartItem";
import Heading from "../wrappers/Heading";
import OrderSummary from "../wrappers/OrderSummary";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <Header />
      <Container className="flex items-center flex-col py-3 mb-5 gap-3">
        <Heading label="Your Shopping Cart" />
        {cartItems.map((item) => {
          return <CartItem key={item._id} {...item} />;
        })}
        <OrderSummary />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
