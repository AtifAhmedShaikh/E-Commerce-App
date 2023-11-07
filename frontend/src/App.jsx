import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductsListing from './pages/ProductsListing'
import WishList from './pages/WishList'
import ErrorPage from './pages/ErrorPage'
import useFetchProducts from './hooks/useFetchProducts'
import useFetchCategories from './hooks/useFetchCategories'
import React from 'react'
function App() {
useFetchProducts();
useFetchCategories();
 return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<ProductsListing />} />
        <Route exact path='/products/:id' element={<ProductDetails />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/wishList' element={<WishList />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='*' element={<ErrorPage/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
