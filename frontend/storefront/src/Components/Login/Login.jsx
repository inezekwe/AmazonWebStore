import React, { useState } from "react";
import axios from 'axios';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/login', 
      { email: 'janedoe@email.com',
        password: 'abc123'})
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="login">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="login-container">
            <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        </div>
        
      </Form>
    </div>
  );
}
