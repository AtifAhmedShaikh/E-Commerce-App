export const reducers = {
    updateAuth:(state,action)=>{
      console.log(action.payload)
      state.auth={...action.payload}
    },
    resetAuth:(state)=>{
      state.auth={status:false,user:null}
    },
    initializeProducts:()=>{
      //call the API
    },
    updateProducts: (state, action) => {
      state.products.data = [...action.payload.products]
      state.products.loading = action.payload.loading
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
      const updatedItems = state.cart.filter(item => item._id !== action.payload.id);
      state.cart = [...updatedItems];
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
      if(!state.activeFilters.includes(action.payload.filter))return;
      const updatedFilters = state.activeFilters.filter(item => item !== action.payload.filter)
      console.log(updatedFilters,action.payload.filter);
      state.activeFilters = [...updatedFilters];
    },
    // reset all active filters, clean up active filters
    resetActiveFilters: (state) => {
      state.activeFilters = [];
    },
    updateOrderDetails:(state)=>{
      if(state.cart.length<1)return;
      const totalProductQuantity = state.cart.map(item=>item.quantity).reduce((total,curr)=>total+curr);
      const subTotal = state.cart.map((item) => item.price * item.quantity).reduce((acc, curr) => acc + curr); //SubTotal of cart
      const salesTax = Math.round((5 / 100) * subTotal); //5% percentage of sales Tax
      const shippingCharges = Math.round((15 / 100) * subTotal); //15% percentage of shipping
      const grandTotal = Math.round(subTotal + salesTax + shippingCharges); //Grand Total
      state.orderDetails={totalProductQuantity,subTotal,salesTax,shippingCharges,grandTotal};
    }
  }
  