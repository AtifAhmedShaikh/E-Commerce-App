import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../reducers/reducers";
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
  wishList: [
    // shopping wish list of user
  ],
  categories: [
    // All categories of products for add filter
  ],
  activeFilters: [
    // active  filters of category to filtering products 
  ],
  orderDetails: {
    // active  filters of category to filtering products 
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
  addWishListItem,
  removeWishListItem,
  updateCategories,
  addActiveFilter,
  removeActiveFilter,
  resetActiveFilters,
  updateOrderDetails
} = storeSlice.actions;
export default storeSlice.reducer;
