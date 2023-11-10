import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartItem, addWishListItem, removeCartItem, removeWishListItem, updateOrderDetails } from '../store/slice/slice';

const AddButtons = ({ isAddedInCart, isAddedInWishList, productState, setProductState }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // handle cart button to add product into cart and Ensure doesn't product has already in cart
    const handleAddToCart = () => {
        dispatch(addCartItem({ item: { ...productState } }));
        dispatch(updateOrderDetails())
        setProductState({ ...productState, isAddedInCart: true });
    };
    // handle remove button to product from cart
    const handleRemoveButton = (productId) => {
        dispatch(removeCartItem({ id: productId }));
        dispatch(updateOrderDetails());
        setProductState({ ...productState, isAddedInCart: false });
    };
    // handle add to wish list button to add the product into wish list
    const handleAddToWishList = () => {
        dispatch(addWishListItem({ item: { ...productState } }));
        setProductState({ ...productState, isAddedInWishList: true });
    };
    // handle remove item from wishlist
    const handleRemoveToWishList = (productId) => {
        dispatch(removeWishListItem({ id: productId }));
        setProductState({ ...productState, isAddedInWishList: false });
   }

    return (
        <React.Fragment>
            <div className="d-flex gap-2 mt-2">
                {isAddedInCart ? (
                    <Button
                        variant="danger"
                        size="sm"
                        className="rounded-1"
                        onClick={() => handleRemoveButton(productState.id)}
                    >
                        Added cart
                    </Button>
                ) : (
                    <Button
                        variant="success"
                        size="sm"
                        className="rounded-1"
                        onClick={() => handleAddToCart()}
                    >
                        Add To Cart
                    </Button>
                )}
                {isAddedInWishList ? <Button
                    variant="danger"
                    size="sm"
                    className="rounded-1"
                    onClick={() => handleRemoveToWishList()}
                >
                    Added wishList
                </Button> :
                    <Button
                        variant="primary"
                        size="sm"
                        className="rounded-1"
                        onClick={() => handleAddToWishList()}
                    >
                        add To Wishlist
                    </Button>}
            </div>
            <Button
                variant="primary"
                size="sm"
                className="rounded-1 mt-2"
                onClick={() => navigate("/products")}
            >
                Continue Shopping
            </Button>

        </React.Fragment>
    )
}
AddButtons.propTypes = {
    isAddedInCart: PropTypes.bool,
    isAddedInWishList: PropTypes.bool,
    productState: PropTypes.object,
    setProductState: PropTypes.func
}
export default AddButtons
