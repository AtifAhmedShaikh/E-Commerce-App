import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between px-4" bg="dark" data-bs-theme="dark" sticky="top" >
      <Container bsPrefix="m-0 d-flex justify-content-between" >
        <Navbar.Brand>
          <Link to={'/'} className='brandName'>
            E-Commerce App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Link className='nav-link text-white' to={'/'}>Home</Link>
            <Link className='nav-link text-white' to={'/products'}>Products</Link>
            <Link className='nav-link text-white' to={'/products'}>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='d-flex gap-3 fs-5'>
        <i className='bx bx-heart text-white'></i>
        <i className='bx bx-cart-add text-white' onClick={() => navigate('/cart')}></i>
      </div>
    </Navbar>
  );
}
export default Header;