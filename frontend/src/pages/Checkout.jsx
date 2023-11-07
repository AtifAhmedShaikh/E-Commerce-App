import React, { useEffect, useState } from "react";
import { container, wrapper } from "../styles/Checkout.module.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState({});//Initialize order details payment
  // Calculate the order details based on the items in shopping cart whenever the cart changes.
  useEffect(() => {
    if (cart.length === 0) return;
    console.log(cart)
    const totalProductQuantity = cart.map(item=>item.quantity).reduce((total,curr)=>total+curr);
    console.log(totalProductQuantity)
      const subTotal = cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr); //SubTotal of cart
    const salesTax = Math.round((5 / 100) * subTotal); //5% percentage of sales Tax
    const shippingCharges = Math.round((15 / 100) * subTotal); //15% percentage of shipping
    const grandTotal = Math.round(subTotal + salesTax + shippingCharges); //Grand Total
    const couponDiscount = Math.round((10 / 100) * grandTotal); //10% percentage of coupon discount
    setOrder({
      productsQuantity: totalProductQuantity,
      subTotal,
      salesTax,
      shippingCharges,
      couponDiscount,
      grandTotal: grandTotal - couponDiscount,
    });
  }, [cart]);
  return (
    <React.Fragment>
      <Header />
      <div className={container}>
        <h4 className="mb-5">Checkout The Details </h4>
        <div className={wrapper}>
          <div>
            <span className="text-capitalize">Products Quantity</span>
            <span>{order.productsQuantity}</span>
          </div>
          <div>
            <span className="text-capitalize">SubTotal</span>
            <span>{order.subTotal}</span>
          </div>
          <div>
            <span className="text-capitalize">Sales Tax</span>
            <span>{order.salesTax} (15%)</span>
          </div>
          <div>
            <span className="text-capitalize">Shipping Charges </span>
            <span>{order.salesTax} (10%)</span>
          </div>
          <Button variant="primary" className="rounded-1">
            Proceed Order
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
Checkout.propTypes = {
  orderDetails: PropTypes.object,
};
export default Checkout;
