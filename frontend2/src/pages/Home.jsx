import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeroContainer from "../layouts/containers/HeroContainer";
import PopularProducts from "../layouts/containers/PopularProducts";
import FeaturedProducts from "../layouts/containers/FeaturedProducts";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroContainer />
      <PopularProducts />
      <FeaturedProducts />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
