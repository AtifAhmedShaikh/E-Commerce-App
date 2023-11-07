import { createSlice, nanoid } from "@reduxjs/toolkit";
import { reducers } from "../reducers/reducers";
const initialState = {
  todo: [{ id: nanoid(), text: "Hello world" }],
  products: [
    //store all products for product listing page
  ],
  cart: [
    //store user shopping cart items
  ],
  wishList: [
    //shopping wish list of user
  ],
  categories: [
    //All categories of products for add filter
  ],
  activeFilters: [
    //filters of brand category to filter
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: reducers,
});
export const {
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
} = todoSlice.actions;
export default todoSlice.reducer;
