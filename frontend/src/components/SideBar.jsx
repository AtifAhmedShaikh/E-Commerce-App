import React, { useState } from 'react'
import styles from "../styles/SideBar.module.css"
import Button from 'react-bootstrap/esm/Button';
//price container
const PriceWrapper = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  return (
    <div className="d-flex flex-column mt-3">
      <div className="range">
        <p className="m-0">minimum Price</p>
        <input type="range" className="range-min" min="0" max="100" value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })} />
        <span>{priceRange.min}</span>
      </div>
      <div className="range">
        <p className='m-0'>maximum Price</p>
          <input type="range" className="range-max" min="0" max="100" value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })} />
        <span>{priceRange.max}</span>
      </div>
    </div>
  )
}
//sort container
const SortWrapper = () => {
  return (
    <div className="mt-3">
      <h5>Sort By Price </h5>
      <div className={styles.wrapper}>
        <input type="radio" name='price' id='label-4' />
        <label htmlFor='label-4'>High To Low</label>
      </div>
      <div className={styles.wrapper}>
        <input type="radio" name='price' id='label-5' />
        <label htmlFor='label-5'>Low To High</label>
      </div>
   </div>
  )
}
const CategoryWrapper = () => {
  const array = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]
  return (
    <div>
      <h5>Categories</h5>
      {array.map((category, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        )
      })}
    </div>
  )
}
const SideBar = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className='d-flex justify-content-between w-100'>
          <h4>Filters</h4>
          <button className='text-black bg-transparent'>
            <i className='bx bx-filter fs-5'></i>
          </button>
        </div>
        <CategoryWrapper />
        <SortWrapper />
        <PriceWrapper />
        <Button variant="primary" className='rounded-1'>Clear Filters</Button>
      </div>
    </React.Fragment>
  )
}

export default SideBar