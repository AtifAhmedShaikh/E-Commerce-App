import api from "../utils/apiConfiguration"
const fetchProducts = async () => {
    try {
        const response = await api.get("/api/products");
         return { data: response.data.products, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
const fetchProductById = async (productId) => {
    try {
        const response = await api.get(`/api/products/${productId}`);
        return { data: response.data, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
const fetchCategories = async () => {
    try {
        const response = await api.get("/api/categories");
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error }
    }
}


export {
    fetchCategories,
    fetchProductById,
    fetchProducts
}