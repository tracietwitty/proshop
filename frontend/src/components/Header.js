import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Navbar.Brand href='/'>Proshop Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i class='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i class='fas fa-sign-in-alt'></i>Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
