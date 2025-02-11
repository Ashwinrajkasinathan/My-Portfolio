import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function Navigation() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">My-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='mx-2 ' href="/">Home</Nav.Link>
            <Nav.Link className='mx-2' href="/about">About</Nav.Link>
            <Nav.Link className='mx-2' href="/skill">Skill</Nav.Link>
            <Nav.Link className='mx-2' href="/project">Project</Nav.Link>
            <Nav.Link className='mx-2' href="/contact">Contact</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;