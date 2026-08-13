import { Navbar, Container, Nav } from 'react-bootstrap';

function HeaderNavbar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand>Portfolio</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;