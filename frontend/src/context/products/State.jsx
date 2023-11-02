import { PropTypes } from "prop-types"
import ProductContext from "./Context"
import { useState } from "react"
const ProductState=({children})=>{
    const [products,setProducts]=useState([]);
    const [singleProducts,setSingleProducts]=useState([]);
    return (
        <ProductContext.Provider value={{products,setProducts,singleProducts,setSingleProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
ProductState.propTypes={
    children:PropTypes.object
}
export default ProductState