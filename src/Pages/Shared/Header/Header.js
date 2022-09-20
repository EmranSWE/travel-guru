import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
   
    const [user, loading, error] = useAuthState(auth);
    const logOut=()=>{
      signOut(auth);
    }
    return (

        <div>
              <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand  as={Link} to="/"><img height='56px' width='120px' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-between "> 
        <Nav>
        <Form className="d-flex px-5">
                  <Form.Control
                    type="search"
                    placeholder="Search Your Destination"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className='text-white fw'>Search</Button>
                </Form>
          </Nav>     
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/news" className='fs-3 text-white px-4'>News</Nav.Link>
            <Nav.Link className='fs-3 text-white px-4'  as={Link} to="/destination">Destination</Nav.Link>
            <Nav.Link className='fs-3 text-white px-4'  as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link className='fs-3 text-white px-4'  as={Link} to="/contact">Contact</Nav.Link>
            {user ? <button onClick={logOut} className='border-0 bg-warning rounded text-white '>Log Out</button>:<Nav.Link className='fs-3 text-white px-4'  as={Link} to="/login"><button className='border-0 bg-warning rounded-2'>Login</button></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;