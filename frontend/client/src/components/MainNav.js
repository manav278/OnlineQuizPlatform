import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.jpg";
function MainNav() {
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="181.8vw"
              height="123.6vh"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{marginTop:"3%"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="main-nav mx-2 my-2" href="/" style={{fontSize:"160%"}}>
                How it
              </Nav.Link>
              <Nav.Link className="main-nav mx-2 my-2" href="/quiz" style={{fontSize:"160%"}}>
                Quiz
              </Nav.Link>
              <Nav.Link className="main-nav mx-2 my-2" href="/about" style={{fontSize:"160%"}}>
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{ color: "white" ,marginTop:"1%",marginBottom:"2%"}} />
    </div>
  );
}

export default MainNav;