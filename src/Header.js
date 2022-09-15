import {Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
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
            <NavDropdown title="항목" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" onClick={()=>{ navigate('/writing') }}>Writing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" onClick={()=>{ navigate('/post') }}>Post</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" onClick={()=>{ navigate('/profile') }}>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
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