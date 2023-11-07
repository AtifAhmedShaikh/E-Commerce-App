import PropTypes from 'prop-types'
const QuantityButtons = ({currentQuantity, stock, state,setState}) => {
  // handle product quantity, update given state and Ensure quantity has in valid range from 1 to stock
  const handleQuantity = (newQuantity, stock,state,setState) => {
    if (!(newQuantity >= 1 && newQuantity <= stock)) return;
    setState({ ...state, quantity: newQuantity })
  }
    return (
        <div className="d-flex gap-2">
            <button className="quantity-btn" onClick={() => handleQuantity(currentQuantity + 1, stock,state,setState)}>
                <i className="bx bx-plus"></i>
            </button>
            <span>{currentQuantity}</span>
            <button className="quantity-btn" onClick={() => handleQuantity(currentQuantity - 1, stock,state,setState)}>
                <i className="bx bx-minus"></i>
            </button>
        </div>
    )
}
QuantityButtons.propTypes = {
    currentQuantity: PropTypes.number,
    stock: PropTypes.number,
    handleQuantity: PropTypes.func,
    state: PropTypes.object,
    setState: PropTypes.func,
}
export default QuantityButtons
