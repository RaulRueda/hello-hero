//Libraries
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Services
import login from "../../services/loginService";

//Style
import "./Login.scss";
import pokeball from "../../assets/pokeball.png";

const Login = () => {
  const [getForm, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "12345"
  });

  const handleLoggin = async event => {
    event.preventDefault();

    //Here should be a User class and inject the dependency, for now keep it simple
    let response = await login(getForm.email, getForm.password);

    if (response) window.location = "/";
  };

  const handleInputChange = async event => {
    setForm({
      email: event.target.id === "email" ? event.target.value : getForm.email,
      password:
        event.target.id === "password" ? event.target.value : getForm.password
    });
  };

  return (
    <Container id="Login">
      <Row className="justify-content-center align-items-center">
        <Col sm={9} md={7} lg={5}>
          <Card className="text-center">
            <Card.Body>
              <img
                src={pokeball}
                width="30"
                height="30"
                className="d-inline-block align-top pokeball"
                alt="Logo"
              />
              <Card.Title>Sign In</Card.Title>
              <Form onSubmit={handleLoggin}>
                <Form.Group controlId="email">
                  <Form.Control
                    required
                    type="email"
                    value={getForm.email}
                    placeholder="Enter email"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    required
                    type="password"
                    value={getForm.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="danger" type="submit" block>
                  Sign In
                </Button>
                <Form.Text className="text-muted">
                  <div>Forgot password?</div>
                </Form.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
