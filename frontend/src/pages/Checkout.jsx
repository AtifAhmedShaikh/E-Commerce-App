import React from "react";
import { wrapper } from "../styles/Checkout.module.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Header from "../layouts/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../layouts/containers/Container";
const Checkout = () => {
  const navigate=useNavigate();
  const order=useSelector((state)=>state.orderDetails);
  // Calculate the order details based on the items in shopping cart whenever the cart changes.
  return (
    <React.Fragment>
      <Header />
        <Container className="justify-content-center align-items-center flex-column" style={{height:"90vh"}}>
        <h4 className="mb-5">Checkout Order Details </h4>
        <div className={wrapper}>
          <div>
            <span className="text-capitalize">Total  Items </span>
            <span>{order.totalProductQuantity}</span>
          </div>
          <div>
            <span className="text-capitalize">SubTotal</span>
            <span>${order.subTotal}</span>
          </div>
          <div>
            <span className="text-capitalize">Sales Tax</span>
            <span>${order.salesTax} <span>15%</span></span>
          </div>
          <div>
            <span className="text-capitalize">Shipping Charges </span>
            <span>${order.shippingCharges} <span>12%</span> </span>
          </div>
          <div>
            <span className="text-capitalize fw-bolder">Grand Total </span>
            <span className="fw-bolder"> ${order.grandTotal} </span>
          </div>
          <Button variant="primary" className="rounded-1" size="sm">
            Proceed Order
          </Button>
          <Button variant="success" className="rounded-1 ms-2" size="sm" onClick={()=>navigate('/products')}>
            Continue Shopping
          </Button>
        </div>
        </Container>
    </React.Fragment>
  );
};
Checkout.propTypes = {
  orderDetails: PropTypes.object,
};
export default Checkout;
