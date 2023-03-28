import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [OHCode, setOHCode] = useState("");
  const [comments, setComments] = useState("");
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");

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
                <b>Student Login Page</b>
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
                  <Form.Label>Office Hours Code</Form.Label>
                  <Form.Control
                    placeholder="Enter Class Code Provided"
                    value={OHCode}
                    onChange={(e) => setOHCode(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Comments </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter any additional information you wish to provide about yourself"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Question(s) </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your Office Hours Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    Tags for your question! (1 word tags seperated by commas){" "}
                  </Form.Label>
                  <Form.Control
                    placeholder="E.g. hw1, question1"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Button
              variant="primary"
              onClick={() => console.log("form submitted")}
            >
              Submit Ticket
            </Button>{" "}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default StudentLogin;
