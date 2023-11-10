import React  from 'react'
import Header from '../layouts/Header'
import WishListItem from '../components/cards/WishListItem'
import { Button } from "react-bootstrap"  
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '../layouts/containers/Container'
const WishList = () => {
    const wishList=useSelector((state)=>state.wishList);
    const navigate=useNavigate();
    return (
        <React.Fragment>
            <Header />
            <h4 className="text-center">Your WishList </h4>
            <Container className='justify-content-center align-items-center flex-column mb-2'>
                {wishList?.map(item => {
                    return <WishListItem key={item._id} {...item}/>
                })}
                <div className="d-flex gap-2">
                    <Button variant="success" size='sm' className="rounded-1" onClick={() => navigate('/checkout')}>Checkout</Button>
                    <Button variant="primary" size='sm'  className="rounded-1" onClick={() => navigate('/products')}>Continue Shopping</Button>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default WishList
