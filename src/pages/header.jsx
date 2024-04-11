import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">Open API</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/posts" className="nav-link" activeclassname="active">Posts</NavLink>
              <NavLink to="/comments" className="nav-link" activeclassname="active">Comments</NavLink>
              <NavLink to="/albums" className="nav-link" activeclassname="active">Albums</NavLink>
              <NavLink to="/photos" className="nav-link" activeclassname="active">Photos</NavLink>
              <NavLink to="/todos" className="nav-link" activeclassname="active">Todos</NavLink>
              <NavLink to="/users" className="nav-link" activeclassname="active">Users</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
