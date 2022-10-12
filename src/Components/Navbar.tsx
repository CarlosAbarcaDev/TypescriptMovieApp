import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="xl" sticky="top">
      <Container fluid className='d-flex  justify-content-center'>
        <Row className='col-8 d-flex'>
            
        <Navbar.Brand href="/home"> <h2  className='text-white'> Movies App </h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
           
          </Nav>
          <Form className="d-flex ml-auto p-2">
          <InputGroup className="">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" >
          Button
        </Button>
      </InputGroup>
          </Form>
        </Navbar.Collapse>

        </Row>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
