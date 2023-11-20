import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { updateProducts } from "../store/actions/productSlice";
import { fetchProducts } from "../services/product";
const useBootUp = () => {
   const dispatch=useDispatch();
   const [error,setError]=useState(false);
   const [loading,setLoading]=useState(false);
   useEffect(()=>{
    (async ()=>{
        const response=await fetchProducts();
        if(!response.error){
            dispatch(updateProducts({products:response.data.products,loading:true}));
            setError(false);
            setLoading(true);
        }else{
            setError(true);
            setLoading(false);
        }
    })();
   },[dispatch,loading]);
   return [error,loading]
}

export default useBootUp;