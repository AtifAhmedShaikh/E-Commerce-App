import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../reducers/productReducers";
const initialState = {
  auth:{
    status:false,
    user:null
  },
  products: {
    loading:false,// for API call product loading
    data:[
      //store all products for product listing page
    ]
  },
  cart: [
    // store user shopping cart items
  ],
  categories: [
    // All categories of products for add filter
  ],
  activeFilters: [
    // active  filters of category to filtering products 
  ],
  orderDetails: {
    //  order details order summary 
  }
};
const storeSlice = createSlice({
  name: "E-store",
  initialState: initialState,
  reducers: reducers,
});
export const {
  updateAuth,
  resetAuth,
  initializeProducts,
  updateProducts,
  updateCart,
  addCartItem,
  removeCartItem,
  updateCategories,
  addActiveFilter,
  removeActiveFilter,
  resetActiveFilters,
  updateOrderDetails
} = storeSlice.actions;
export default storeSlice.reducer;
