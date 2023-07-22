import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../component/images/logo.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../component/static/Static.css'
import {Link} from 'react-router-dom'
function BasicExample() {
  return (
    <Navbar expand="lg" className="background">
      <Container>
        <Navbar.Brand href="#home" >
            <Link to="/" className=''><img src={Logo} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto myNav">
            <Nav.Link>
                <Link to="/men" className='myNav'>Men</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/women" className='myNav'>Women</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/bridal" className='myNav'>Bridal</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/traditional" className='myNav'>Traditional</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/about" className='myNav'>About</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/contact" className='myNav'>Contact</Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;