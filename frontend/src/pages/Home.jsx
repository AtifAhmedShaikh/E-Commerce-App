import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Link to='/products'>
      <Button variant="primary" className='rounded-1 py-1 px-2 fs-6 mt-3 ms-5' size="lg">
       Continue Shopping
        </Button>

      </Link>
    </React.Fragment>
  )
}
export default Home