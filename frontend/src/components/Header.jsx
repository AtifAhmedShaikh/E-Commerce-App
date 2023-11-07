import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const isAuth = true;
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between px-4" bg="dark" data-bs-theme="dark" sticky="top" >
      <Container bsPrefix="m-0 d-flex justify-content-between" >
        <Navbar.Brand>
          <Link to={'/'} className='brandName'>
            E-Commerce App
          </Link>
        </Navbar.Brand>
      </Container>
      <div className='d-flex gap-4'>
      <div className='d-flex gap-2 fs-5'>
        <Button className="bg-transparent border-0 fs-5 p-0 m-0" onClick={() => navigate('/cart')}>
        <i className='bx bx-user-circle'></i>
        </Button>
        <Button className="bg-transparent border-0 fs-5 p-0 m-0" onClick={() => navigate('/wishList')}>
          <i className='bx bx-heart text-white'></i>
        </Button>
        <Button className="bg-transparent border-0 fs-5 p-0 m-0" onClick={() => navigate('/cart')}>
          <i className='bx bx-cart-add text-white'></i>
        </Button>
      </div>
      {!isAuth ? <div className="d-flex gap-2">
        <Button variant="outline-primary" className='rounded-1 px-1 py-1 m-0'>Sign Up</Button>
        <Button variant="primary" className='rounded-1 px-1 py-1 m-0'>Login</Button>
      </div> : <Button variant="primary" className='rounded-1 px-1 py-1 m-0'>Logout</Button>}

      </div>

    </Navbar>
  );
}
export default Header;