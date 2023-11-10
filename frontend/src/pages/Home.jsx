import React from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeroContainer from  "../layouts/containers/HeroContainer"
import PopularProducts from '../layouts/containers/PopularProducts';
const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <HeroContainer/>
      <PopularProducts/>
      <Footer/>
    </React.Fragment>
  )
}
export default Home