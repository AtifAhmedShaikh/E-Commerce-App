import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button';
import { addActiveFilter, removeActiveFilter, updateProducts } from '../../store/actions/productSlice';
import { activeFiltersProducts } from '../../utils/filters';
import { fetchProducts } from '../../services/product';
import { HightToLowIcon } from '../../components/icons/HeroIcons';

const FiltersBar = () => {
    const activeFilters=useSelector((state)=>state.activeFilters);
    const categories=useSelector((state)=>state.categories);
    const dispatch=useDispatch();
    //handle filter buttons Toggle to add or remove this category in active filters, then set filtered products into store
    const handleFilterToggle=async(newFilter,toggle)=>{
        dispatch(updateProducts({loading:false,products:[]}));
        const {data}=await fetchProducts();
        const filtersProducts=await activeFiltersProducts(activeFilters,data.products)
        if(toggle){
            dispatch(removeActiveFilter({filter:newFilter}));
        }else{
            dispatch(addActiveFilter({filter:newFilter}));
        }
        dispatch(updateProducts({loading:true,products:filtersProducts}));
    }
   return (
            <div className='max-w-[100%] px-5 py-3 overflow-hidden'>
                <h4  className='font-normal  ml-3'>Categories</h4>
                <div className=' gap-3 justify-center overflow-x-scroll overflow-y-hidden w-[100%] filter-container'>
                    {
                       categories.map((category,index)=>{
                        const isActive=activeFilters.includes(category);
                        return <Button key={index}  onClick={()=>handleFilterToggle(category,isActive)} className={`${isActive?"bg-blue-500 text-gray-100":"bg-gray-200 text-gray-600 "}   shadow-md border border-gray-300 rounded-md ml-2 text-md  font-medium px-2 py-1 hover:bg-blue-500 hover:text-gray-100 h-fit`}>{category}</Button>
                       })
                    }
                </div>
           </div>
  )
}

export default FiltersBar