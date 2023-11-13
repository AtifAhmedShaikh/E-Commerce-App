import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import HeroContainer from "./layouts/containers/HeroContainer";
import Footer from "./layouts/Footer";
import PopularProducts from "./layouts/containers/PopularProducts";
import FeaturedProducts from "./layouts/containers/FeaturedProducts";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <HeroContainer/>
    <PopularProducts/>
    <FeaturedProducts/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
