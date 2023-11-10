import React from 'react';
import {container} from "../../styles/SideBar.module.css"
import Button from 'react-bootstrap/esm/Button';
import CategoryWrapper from '../../wrappers/CategoryWrapper';
import SortWrapper from '../../wrappers/SortWrapper';
import PriceWrapper from '../../wrappers/PriceWrapper';
import { useDispatch } from 'react-redux';
import { resetActiveFilters } from '../../store/slice/slice';
const FiltersContainer = () => {
  const dispatch=useDispatch();
  const handleClearFilters=()=>{
    
    dispatch(resetActiveFilters())
  }
  return (
    <React.Fragment>
      <div className={container}>
        <div className='d-flex justify-content-between w-100'>
          <h4>Filters</h4>
          <button className='text-black bg-transparent'>
            <i className='bx bx-filter fs-5'></i>
          </button>
        </div>
        <CategoryWrapper/>
        <SortWrapper/>
        <PriceWrapper/>
        <Button variant="outline-primary" size="sm" className='rounded-1 py-1 px-2' style={{fontSize:"14  px"}} onClick={handleClearFilters}>Clear Filters</Button>
      </div>
    </React.Fragment>
  )
}

export default FiltersContainer