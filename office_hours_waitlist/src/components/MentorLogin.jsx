import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MentorLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Button variant="danger" onClick={() => navigate("/")}>
                Back
              </Button>{" "}
            </Col>
            <Col xs={8}>
              <h1>Mentor Login Page</h1>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default MentorLogin;
