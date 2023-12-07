import { useState } from "react";
import QuantityWrapper from "../../wrappers/QuantityWrapper";
import { useDispatch } from "react-redux";
import { removeCartItem, updateOrderDetails } from "../../store/actions/productSlice";

const CartItem = (props) => {
  //set the cart item data into state because we control quantity
  const dispatch=useDispatch();
  const [itemData, setItemData] = useState({ ...props });
  const { title, description, mainImage, price, quantity } = itemData;
  const handleRemoveButton=()=>{
    dispatch(removeCartItem({id:itemData._id}));
    dispatch(updateOrderDetails());
  }
  return (
    <div className="w-[85%] h-[4rem] bg-gray-100 py-2 px-2 rounded-md flex justify-between items-center hover:bg-gray-200">
      <div className="flex gap-2 w-[50%]">
        <img className="rounded-md w-[5rem] h-[3rem]" src={mainImage} alt="" />
        <div>
          <h5 className="font-bold">{title}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="max-w-[10%] ">${price}</div>
      <QuantityWrapper
        currentQuantity={quantity}
        state={itemData}
        setState={setItemData}
      />
      <div className="max-w-[10%]">${price * quantity}</div>
      <div>
        <button className="w-[25px] h-[25px] border border-gray-300 px-0 py-0 rounded-[5px]   hover:bg-gray-400" onClick={handleRemoveButton}>
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
