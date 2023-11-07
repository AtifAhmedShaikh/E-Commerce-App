import { useEffect, useState } from "react";
import { fetchProductById } from "../services/products";
import { useSelector } from "react-redux";

function useProductById(productId) {
    const [product,setProduct]=useState({});
    const cart=useSelector((state)=>state.cart);
    const wishList=useSelector((state)=>state.wishList);
    useEffect(() => {
        (async () => {
            const response = await fetchProductById(productId);
            const cartIds=cart.map(item=>item._id);
            const itemsIds=wishList.map(item=>item._id);
            const isAddedInCart=cartIds.includes(productId);
            const isAddedInWishList=itemsIds.includes(productId);
            setProduct({...response.data.product,isAddedInCart,isAddedInWishList});
        })();
    }, [productId,cart,wishList]);
    return product
}

export default useProductById;