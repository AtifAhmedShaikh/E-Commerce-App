import {wrapperBox} from "../styles/SideBar.module.css"
import { sortByPriceOrder } from "../utils/filters"
import {fetchProducts}from "../services/products";
import {useDispatch}from "react-redux";
import  { updateProducts } from '../store/slice/slice'

const SortWrapper = () => {
  const dispatch=useDispatch();
  const handleSort=async(sortOrder)=>{
    const res=await fetchProducts();
    const sortedProducts=sortByPriceOrder(res.data,sortOrder)
    dispatch(updateProducts({products:sortedProducts}))
  }
    return (
        <div className="mt-3">
        <h5>Sort By Price </h5>
        <div className={wrapperBox}>
          <input type="radio" name='price' id='label-4' onChange={()=>handleSort("highToLow")}/>
          <label htmlFor='label-4'>High To Low</label>
        </div>
        <div className={wrapperBox}>
          <input type="radio" name='price' id='label-5' onChange={()=>handleSort("lowToHigh")}/>
          <label htmlFor='label-5'>Low To High</label>
        </div>
     </div>
     )
}



export default SortWrapper
