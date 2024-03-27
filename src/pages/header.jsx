import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/posts">Open API</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  href="/posts" to="/posts">Posts</Nav.Link>
        <Nav.Link  href="/comments" to="/posts">Comments</Nav.Link>
        <Nav.Link  href="/albums" to="/posts">Albums</Nav.Link>
        <Nav.Link  href="/photos" to="/posts">Photos</Nav.Link>
        <Nav.Link  href="/todos" to="/posts">Todos</Nav.Link>
        <Nav.Link  href="/users" to="/posts">Users</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Header
