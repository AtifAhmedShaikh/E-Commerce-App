import React  from 'react'
import Header from '../components/Header'
import WishListItem from '../components/cards/WishListItem'
import WishListContext from '../context/wishList/Context'
import { useContext } from 'react'
import {container} from "../styles/WishList.module.css"
import { Button } from "react-bootstrap"  
import { useNavigate } from 'react-router-dom'
const WishList = () => {
    const wishList=useContext(WishListContext);
    const navigate=useNavigate();
    return (
        <React.Fragment>
            <Header />
            <h4 className="text-center">Your WishList </h4>
            <div className={container}>
                {wishList.wishList.map(item => {
                    return <WishListItem key={item.id} {...item}/>
                })}
                <div className="d-flex gap-2">
                    <Button variant="primary" bsPrefix="btn btn-primary rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" bsPrefix="btn btn-success rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default WishList
