import {Navbar, Nav, Container } from 'react-bootstrap';
import './style/header.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';


function Header() {

  let navigate=useNavigate();

  return(
    <>
      <Navbar bg="light" expand="lg">
          <Container className='header'>
          <Navbar.Brand className='Name' href="/">SILVERZONE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/educationplan') }}>계획</Nav.Link>
            <div className='margin'>
              <Nav.Link className='header_login'><Link to='/login'>로그인</Link></Nav.Link>
              <Nav.Link className='header_register'><Link to='/register'>회원가입</Link></Nav.Link>
            </div>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;