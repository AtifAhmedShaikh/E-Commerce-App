import { useState } from "react";
import {Button} from 'react-bootstrap'
import { fetchProducts } from "../services/products";
import { filterProductsByPriceRange } from "../utils/filters";
import { useDispatch } from "react-redux";
import { updateProducts } from "../store/slice/slice";
const PriceWrapper = () => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
    const dispatch=useDispatch();
    // handle price filter for filter the products by given price range
    const handlePriceFilter=async(e)=>{
      const res=await fetchProducts();
      const filtered=filterProductsByPriceRange(res.data,priceRange.min,priceRange.max)
      dispatch(updateProducts({products:filtered}));
      e.target.className="rounded-1 col-5 mb-3 px-0 py-1 btn btn-primary";
    }
    return (
      <div className="d-flex flex-column mt-3 w-100">
        <div className="range w-100">
          <p className="m-0">Minimum Price</p>
          <input type="range" className="range-min w-80" min="0" max={priceRange.max} value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })} />
          <span>{priceRange.min}</span>
        </div>
        <div className="range">
          <p className='m-0'>Maximum Price</p>
            <input type="range" className="range-max" min={priceRange.min} max="2000" value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })} />
          <span>{priceRange.max}</span>
        </div>
      <Button variant="outline-primary" className="rounded-1 col-5 mb-3 px-0 py-1" style={{fontSize:"11px"}} onClick={handlePriceFilter}>
        Apply Price Range
      </Button>
      </div>
    )

}
export default PriceWrapper