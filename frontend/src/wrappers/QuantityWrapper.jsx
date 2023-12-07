import PropTypes from 'prop-types'
const QuantityWrapper = ({currentQuantity,state,setState}) => {
  const handleQuantity=(newQuantity)=>{
    if(newQuantity<=0)return;
    setState({...state,quantity:newQuantity})
  }
  return (
    <div className="flex gap-2 text-gray-100 text-md">
      <button className="bg-orange-600 w-[25px] h-[25px] rounded-sm hover:scale-90 hover:bg-orange-400" onClick={()=> handleQuantity(currentQuantity+1)}>
        <i className="bx bx-plus"></i>
      </button>
      <span className="text-gray-600">{currentQuantity}</span>
      <button className="bg-orange-600 w-[25px] h-[25px] rounded-sm hover:scale-90 hover:bg-orange-400" onClick={()=> handleQuantity(currentQuantity-1)}>
        <i className="bx bx-minus"></i>
      </button>
    </div>
  );
};
QuantityWrapper.propTypes={
  currentQuantity:PropTypes.number,
  state:PropTypes.object,
  setState:PropTypes.func,
}
export default QuantityWrapper;
