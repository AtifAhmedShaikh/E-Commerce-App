import React from "react"
import ProductCard from "../components/cards/ProductCard"
import Header from "../components/Header";
import FiltersContainer from "../containers/FiltersContainer";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
const ProductsListing = () => {
  const products = useSelector((state) => state.products);//Get All products from redux store
  return (
    <React.Fragment>
      <Header />
      <FiltersContainer />
      <div className="container-fluid justify-content-around d-flex flex-wrap py-3 px-2 gap-3" style={{ marginLeft: "20%", width: "80%" }}>
        {products.length===0&&<Loader/>}
        {products.map(product => {
          return <ProductCard key={product._id} {...product} />
        })}
      </div>
    </React.Fragment>
  )
}
export default ProductsListing