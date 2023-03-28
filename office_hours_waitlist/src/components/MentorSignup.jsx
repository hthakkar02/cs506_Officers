import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function MentorSignup() {
  return (
    <div>
      <header>
        <Container>
          <Row>
            <Col>
              <h1>Mentor Login Page</h1>
            </Col>
            <Col>
              <Button variant="primary">Student Signup</Button>{" "}
              <Button variant="secondary">Mentor Login</Button>{" "}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default MentorSignup;
