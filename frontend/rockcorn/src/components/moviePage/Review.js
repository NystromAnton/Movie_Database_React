import React from "react";
import { Modal, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

function Review() {
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");
  var [loggedIn, setLoggedIn] = useState(false);
  var [activeUser, setActiveUser] = useState(0);

  console.log(loggedIn);
  console.log(activeUser);
  const handleSubmit = () => {
    console.log(userName);
    console.log(password);
    setLoggedIn(true);
    fetch(`http://localhost:5000/users/${userName}/${password}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setActiveUser(result);
      });
  };

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="inlineFormInputGroupUsername"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName((userName = e.target.value));
              }}
            />
          </InputGroup>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword((password = e.target.value));
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Log in
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
}

export default Review;

{
  /* value={password}
              onChange={(e) => {
                setPassword((password = e.target.value));
              }}
              value={userName}
              onChange={(e) => {
                setUserName((userName = e.target.value));
              }}
              
              
              */
}
