import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MentorSignup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            <Col>
              <h1>
                <b>Mentor Signup Page</b>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    placeholder="Class Role e.g. Peer Mentor, TA, Instructor"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control
                    placeholder="Please enter your pronouns"
                    value={pronouns}
                    onChange={(e) => setPronouns(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    placeholder="UserID seen by others "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Button
              variant="primary"
              onClick={() => console.log("Account Created")}
            >
              Create Account
            </Button>{" "}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default MentorSignup;
