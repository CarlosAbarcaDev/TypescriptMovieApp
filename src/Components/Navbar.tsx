import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";


function NavbarComponent() {
  const history = useHistory()
  const initialValues: {
    search: string;
  } = {
    search: "",
  };
  const handleSearch = (formValue: { search: string }) => {
    const { search } = formValue;
    console.log(search)
    history.push(`/movies/search/${search}`)
    
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
      <Form>
        <Navbar bg="dark" expand="xl" sticky="top">
          <Container fluid className="d-flex  justify-content-center">
            <Row className="col-8 d-flex">
              <Navbar.Brand href="/">
                {" "}
                <h2 className="text-white"> Movies App </h2>{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to="/favorite-list" className="text-white">
                    Favorites
                  </Link>
                </Nav>
                <div className="d-flex ml-auto p-2">
                  <InputGroup className="">
                    <Field
                      name="search"
                      type="text"
                      className="form-control"
                    />
                    <Button type="submit" variant="outline-secondary">
                      Search
                    </Button>
                  </InputGroup>
                </div>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
      </Form>
    </Formik>
  );
}

export default NavbarComponent;
