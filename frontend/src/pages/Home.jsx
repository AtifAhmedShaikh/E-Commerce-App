import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Link to='/products'>
      <Button variant="primary" size="lg" bsPrefix='btn btn-primary mt-3 ms-5'>
       Continue Shopping
        </Button>

      </Link>
    </React.Fragment>
  )
}
export default Home