import React, { useEffect, useState } from "react"
import ProductCard from "../components/cards/ProductCard"
import SideBar from "../components/SideBar"
import { fetchProducts } from "../services/products";
import Loader from "../components/Loader";
import Header from "../components/Header";
const ProductsListing = () => {
  const [loading, setLoading] = useState(false);
  const [products,setProducts]=useState([]);
  //fetch and render all products by IFE in useEffect
  useEffect(() => {
    (async ()=>{
    const {data,error}= await fetchProducts();
    if(error)return;
    setProducts(data.products)
    setLoading(true);
  })();
  }, [loading])
  return (
    <React.Fragment>
      <Header/>
      <SideBar />
      <div className="container-fluid justify-content-around d-flex flex-wrap py-3 px-2 gap-3" style={{ marginLeft: "20%", width: "80%" }}>
        {!loading && <Loader />}
        {products.map(product => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </React.Fragment>
  )
}

export default ProductsListing
