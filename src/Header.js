import {Navbar, Nav, Container } from 'react-bootstrap';
import './style/header.css'
import {Routes, Route, Link} from 'react-router-dom';

function Header() {
  return(
    <>
      <Navbar bg="light" expand="lg">
          <Container className='header'>
          <Navbar.Brand className='Name' href="/">SILVERZONE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>기능</Nav.Link>
            <Nav.Link className='header_login'><Link to='/login'>로그인</Link></Nav.Link>
            <Nav.Link className='header_register'><Link to='/register'>회원가입</Link></Nav.Link>
          </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;