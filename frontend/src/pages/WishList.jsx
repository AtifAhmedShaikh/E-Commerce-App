import React  from 'react'
import Header from '../components/Header'
import WishListItem from '../components/cards/WishListItem'
import {container} from "../styles/WishList.module.css"
import { Button } from "react-bootstrap"  
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const WishList = () => {
    const wishList=useSelector((state)=>state.wishList);
    const navigate=useNavigate();
    return (
        <React.Fragment>
            <Header />
            <h4 className="text-center">Your WishList </h4>
           <div className={container}>
                {wishList?.map(item => {
                    return <WishListItem key={item._id} {...item}/>
                })}
                <div className="d-flex gap-2">
                    <Button variant="primary" className="rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" className="rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WishList
