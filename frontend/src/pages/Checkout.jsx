import React from 'react'
import styles from '../styles/Checkout.module.css'
import {Button}from "react-bootstrap"

const Checkout = () => {
  return (
    <React.Fragment>
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.item}>
                <span>SubTotal</span>
                <span>$90000</span>
            </div>
            <div className={styles.item}>
                <span>Sales Tax</span>
                <span>$90000</span>
            </div>
            <div className={styles.item}>
                <span>Shipping Charges</span>
                <span>$90000</span>
            </div>
            <div className={styles.item}>
                <span>Average Item Price</span>
                <span>$90000</span>
            </div>
            <div className={styles.item}>
                <span>Grand Total</span>
                <span>$90000</span>
            </div>
            <Button varient="primary" bsPrefix="btn btn-primary rounded-1">Proceed Order</Button>

            </div>
        </div>
    </React.Fragment>
  )
}

export default Checkout
