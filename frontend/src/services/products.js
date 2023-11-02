import api from "../utils/apiConfiguration"
const fetchProducts=async()=>{
    try {
        const response=await api.get("/products");
        return {data:response.data,error:null}
    } catch (error) {
        return {data:null,error}
    }
}
// fetch one specific product by Id
const fetchProductById=async(productId)=>{
    try {
        const response=await api.get(`/products/${productId}`);
        return {data:response.data,error:null}
    } catch (error) {
        return {data:null,error}
    }
}
const fetchCategories=async()=>{
    try {
        const response=await api.get("/products/categories")
        return {data:response.data,error:null};
    } catch (error) {
        return {data:null,error}
    }
}
export {
    fetchProducts,
    fetchProductById,
    fetchCategories
}