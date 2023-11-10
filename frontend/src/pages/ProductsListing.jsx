import React from "react"
import ProductCard from "../components/cards/ProductCard"
import Header from "../layouts/Header";
import FiltersContainer from "../layouts/containers/FiltersContainer";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Container from "../layouts/containers/Container";
const ProductsListing = () => {
  const products = useSelector((state) => state.products.data);//Get All products from redux store
  const loading = useSelector((state) => state.products.loading);//Get All products from redux store
  return (
    <React.Fragment>
      <Header />
      <FiltersContainer />
      <Container className="justify-content-around d-flex flex-wrap py-3 px-2 gap-3" style={{ marginLeft: "20%", width: "80%" }}>
        {!loading && <Loader fontSize="16px" label="loading products..."/>}
        {products.map(product => {
          return <ProductCard key={product._id} {...product} />
        })}
      </Container>
    </React.Fragment>
  )
}
export default ProductsListing