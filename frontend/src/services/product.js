import api from "../config/apiConfig"
export const fetchProducts=async()=>{
    try {
        const response=await api.get("/api/products");
        return {data:response.data,error:null};
    } catch (error) {
        return {data:null,error};
    }
}
export const fetchProductById=async(productId)=>{
    try {
        const response=await api.get(`/api/products/${productId}`);
        return {data:response.data,error:null};
    } catch (error) {
        return {data:null,error};
    }
}





