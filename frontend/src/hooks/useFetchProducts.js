import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../services/products";
import { updateProducts } from "../store/slice/slice";

function useFetchProducts() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const response = await fetchProducts();
            dispatch(updateProducts({ products: response.data }))
        })();
    }, [dispatch]);
}

export default useFetchProducts;