import api from "../utils/apiConfiguration"
const fetchProducts = async () => {
    try {
        const response = await api.get("/api/products");
         return { data: response.data.products, error: null }
    } catch (error) {
        return { data: [], error }
    }
}
const fetchPopularProducts = async () => {
    try {
        const response = await api.get("/api/products");
        console.log(response.data.products.slice(2,10));
         return { data: response.data.products.slice(2,10), error: null }
    } catch (error) {
        return { data: [], error }
    }
}
const fetchProductById = async (productId) => {
    try {
        const response = await api.get(`/api/products/${productId}`);
        return { data: response.data, error: null }
    } catch (error) {
        return { data: [], error }
    }
}

const fetchCategories = async () => {
    try {
        const response = await api.get("/api/categories");
        return { data: response.data, error: null };
    } catch (error) {
        return { data:{categories:[]}, error }
    }
}
export {
    fetchCategories,
    fetchProductById,
    fetchProducts,
    fetchPopularProducts
}