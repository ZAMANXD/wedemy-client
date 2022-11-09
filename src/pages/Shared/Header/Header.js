import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/befr.png';
import './Header.css';

function Header() {
  return (
    <Navbar
      className="befr-navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="befr-logo">
          <Link to="/">
            <img src={logo} alt="befr-LOGO" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto befr-nav-links">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
          <Nav className="befr-nav-links">
            <Link to="/join">Join with Google</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
