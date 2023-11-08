import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import HeroContainer from '../containers/HeroContainer';
import PopularProducts from '../containers/PopularProducts';
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