import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../reducers/reducers";
const initialState = {
  products: [
    //store all products for product listing page
  ],
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
};
const storeSlice = createSlice({
  name: "E-store",
  initialState: initialState,
  reducers: reducers,
});
export const {
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
} = storeSlice.actions;
export default storeSlice.reducer;
