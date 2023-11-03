import React, { useContext, useEffect, useState} from 'react'
import { container, wrapper, } from '../styles/Checkout.module.css'
import { Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import CartContext from '../context/cart/Context'
import Header from "../components/Header"
const Checkout = () => {
    const cartContext=useContext(CartContext);
    const [order,setOrder]=useState({});
    useEffect(()=>{
        const totalProductQuantity=cartContext.cart.length;
        const subTotal=cartContext.cart.map(item=>item.price*item.quantity).reduce((acc,curr)=>acc+curr);
        const salesTax=Math.round(5/100*subTotal);
        const shippingCharges=Math.round(15/100*subTotal);
        const grandTotal=Math.round(subTotal+salesTax+shippingCharges);
        setOrder({productQuantity:totalProductQuantity,subTotal,salesTax,shippingCharges,grandTotal});
    },[cartContext.cart])
    return (
        <React.Fragment>
            <Header/>
            <div className={container}>
                <h4 className='mb-5'>Checkout The Details </h4>
                <div className={wrapper}>
                    {Object.keys(order).map((item, index) => {
                        return (
                            <div className={item} key={index}>
                                <span className='text-capitalize'>{item}</span>
                                <span>{order[item]}</span>
                            </div>
                        )
                    })}
                    <Button variant="primary" className='rounded-1'>Proceed Order</Button>
                </div>
            </div>
        </React.Fragment>
    )
}
Checkout.propTypes = {
    orderDetails: PropTypes.object
}
export default Checkout