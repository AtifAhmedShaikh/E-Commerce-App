import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductsListing from './pages/ProductsListing'
function App() {
  return (
    <>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/products' element={ <ProductsListing/>}/>
          <Route exact path='/products/:id' element={ <ProductDetails/>}/>
          <Route exact path='/cart' element={ <Cart/>}/>
          <Route exact path='/checkout' element={ <Checkout/>}/>
        </Routes>
    </>
  )
}

export default App
