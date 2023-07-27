import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../component/images/logo.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../component/static/Static.css'
import {Link, useLocation} from 'react-router-dom'
import ShowForm from './ShowForm';
// import ShowForm from './ShowForm';

function BasicExample() {

  const location = useLocation();

  const {pathname} = location;

  const splitLocation = pathname.split('/');
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
                <Link className={splitLocation[1] === "men" ? "active-link myNav" : "myNav"} to="/men"
                >Men</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className={splitLocation[1] === "women" ? "active-link myNav" : "myNav"} to="/women"
                >women</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className={splitLocation[1] === "bridal" ? "active-link myNav" : "myNav"} to="/bridal"
                >bridal</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className={splitLocation[1] === "traditional" ? "active-link myNav" : "myNav"} to="/traditional"
                >traditional</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className={splitLocation[1] === "about" ? "active-link myNav" : "myNav"} to="/about"
                >about</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className={splitLocation[1] === "contact" ? "active-link myNav" : "myNav"} to="/contact"
                >contact</Link>
            </Nav.Link>
          </Nav>
          {/* <ShowForm/> */}
          
          <ShowForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;