import { PropTypes } from "prop-types"
import { useState } from "react"
import WishListContext from "./Context";
const WishListState=({children})=>{
    const [wishList,setWishList]=useState([]);
    return (
        <WishListContext.Provider value={{wishList,setWishList}}>
            {children}
        </WishListContext.Provider>
    )
}
WishListState.propTypes={
    children:PropTypes.object
}
export default WishListState