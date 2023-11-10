import api from "../utils/apiConfiguration"
export const fetchProducts = async () => {
    try {
        const response = await api.get("/api/products");
        return { data: response.data.products, error: null }
    } catch (error) {
        return { data: [], error }
    }
}
export const fetchPopularProducts = async () => {
    try {
        const response = await api.get("/api/popularProducts");
        return { data: response.data.products, error: null }
    } catch (error) {
        return { data: [], error }
    }
}
export const fetchProductById = async (productId) => {
    try {
        const response = await api.get(`/api/products/${productId}`);
        return { data: response.data, error: null }
    } catch (error) {
        return { data: [], error }
    }
}
export const fetchCategories = async () => {
    try {
        const response = await api.get("/api/categories");
        return { data: response.data, error: null };
    } catch (error) {
        return { data: { categories: [] }, error }
    }
}
