import {Navbar, Nav, Container } from 'react-bootstrap';
import './style/header.css'

function Header() {
  return(
    <>
    <Navbar bg="light" expand="lg">
        <Container className='header'>
        <Navbar.Brand className='Name' href="/">SILVERZONE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>기능</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Header;