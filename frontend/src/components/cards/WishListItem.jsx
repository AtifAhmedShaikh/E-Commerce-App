import { useContext, useState } from "react";
import { handleQuantity } from '../../utils/handler';
import { item, descriptionWrapper } from "../../styles/Cart.module.css"
import QuantityButtons from "../QuantityButtons";
import WishListContext from "../../context/wishList/Context";
const WishListItem = (props) => {
  const [product, setProduct] = useState({ ...props });
  const wishList=useContext(WishListContext)
  //handle remove button to remove the specific one product from wish list by product ID
  const handleRemoveButton=(productId)=>{
    const filtered=wishList.wishList.filter((item)=>item.id===productId);
    wishList.setWishList([...filtered])
  }
  // Destructure the product data
  const { title, description, price, category, quantity, thumbnail, stock ,id} = product;
  return (
    <>
      <div className={item}>
        <img src={thumbnail} alt="" />
        <div className={descriptionWrapper}>
          <h5>{title}</h5>
          <p className='m-0'>
            {description}
          </p>
          <p>
            {category}
          </p>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <QuantityButtons currentQuantity={quantity} stock={stock}  handleQuantity={handleQuantity} state={product} setState={setProduct} />
        <div>
          <p>
            ${price * quantity}
          </p>
        </div>
        <div>
          <button className='cut-button' onClick={()=>handleRemoveButton(id)}>
            X
          </button>
        </div>
      </div>
    </>
  )
}

export default WishListItem
