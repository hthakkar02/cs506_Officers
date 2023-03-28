import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <h1>Login Page</h1>
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={() => navigate("/studentSignup")}
              >
                Student Signup
              </Button>{" "}
              <Button
                variant="primary"
                onClick={() => navigate("/mentorSignup")}
              >
                Mentor Signup
              </Button>{" "}
              <Button
                variant="primary"
                onClick={() => navigate("/mentorLogin")}
              >
                Mentor Login
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default LandingPage;
