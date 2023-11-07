export const reducers={
      updateProducts:(state,action)=>{
        state.products=[...action.payload.products]
      },
      updateCart:(state,action)=>{
        state.cart=[...action.payload.cart]
      },
      addCartItem:(state,action)=>{
        state.cart.push(action.payload.item);
      },
      removeCartItem:(state,action)=>{
        const updatedItems=state.cart.filter(item=>item._id!==action.payload.id)
        console.log(action.payload.id);
        console.log(updatedItems.length,'filtered<----->complete',state.cart.length);
        state.cart=[...updatedItems];
      },
      addWishListItem:(state,action)=>{
        state.wishList.push(action.payload.item);
      },
      removeWishListItem:(state,action)=>{
        const updatedItems=state.wishList.filter(item=>item._id!==action.payload.id);
        state.wishList=[...updatedItems];
      },
      updateCategories:(state,action)=>{
        state.categories=[...action.payload.categories];
      },
      addActiveFilter:(state,action)=>{
        state.activeFilters.push(action.payload.filter);
      },
      removeActiveFilter:(state,action)=>{
        const updatedFilters=state.activeFilters.filter(item=>item!==action.payload.filter)
        state.activeFilters=[...updatedFilters];
      },
      resetActiveFilters:(state)=>{
        state.activeFilters=[];
      },
}
