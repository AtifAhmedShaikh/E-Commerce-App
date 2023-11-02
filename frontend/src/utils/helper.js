  // handle product quantity, update given state and Ensure quantity has in valid range from 1 to stock
  const handleQuantity = (newQuantity, stock,state,setState) => {
    if (!(newQuantity >= 1 && newQuantity <= stock)) return;
    setState({ ...state, quantity: newQuantity })
  }
  export {
    handleQuantity
  }