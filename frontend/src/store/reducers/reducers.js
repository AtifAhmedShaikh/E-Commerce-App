export const reducers = {
  initializeProducts:()=>{
    //call the API
  },
  updateProducts: (state, action) => {
    state.products = [...action.payload.products]
  },
  updateCart: (state, action) => {
    state.cart = [...action.payload.cart]
  },
  // add the given product item in cart state in store
  addCartItem: (state, action) => {
    state.cart.push(action.payload.item);
  },
  // remove product item from cart by given product Id
  removeCartItem: (state, action) => {
    const updatedItems = state.cart.filter(item => item._id !== action.payload.id)
    state.cart = [...updatedItems];
  },
  // add the given product in to wishlist
  addWishListItem: (state, action) => {
    state.wishList.push(action.payload.item);
  },
  // remove product from wishlist by given product Id
  removeWishListItem: (state, action) => {
    const updatedItems = state.wishList.filter(item => item._id !== action.payload.id);
    state.wishList = [...updatedItems];
  },
  // update categories array to display all categories of products for filtering
  updateCategories: (state, action) => {
    state.categories = [...action.payload.categories];
  },
  // add given category filter from active filters
  addActiveFilter: (state, action) => {
    state.activeFilters.push(action.payload.filter);
  },
  // remove given category filter from active filters
  removeActiveFilter: (state, action) => {
    const updatedFilters = state.activeFilters.filter(item => item !== action.payload.filter)
    state.activeFilters = [...updatedFilters];
  },
  // reset all active filters, clean up active filters
  resetActiveFilters: (state) => {
    state.activeFilters = [];
  },
}
