import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchProducts} from "../services/products" 
import {updateProducts} from "../store/slice/slice.js"
function useInitializeProducts() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const response=await fetchProducts();
            dispatch(updateProducts({ products: response.data,loading:true }))
        })();
    }, [dispatch]);
}

export default useInitializeProducts;