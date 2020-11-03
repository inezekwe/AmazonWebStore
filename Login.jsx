import { Form, Button } from "react-bootstrap";
import React, { Component } from 'react';
import axios from 'axios'; 
import "./Login.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.state)
    axios.post('/login', { email, password })
      .then((result) => {
        alert("Succesfully Logged In!")
      });
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    render() {
      const { email, password } = this.state;
      return (
        <div className="login">
          <Form>
            <div className="login-container">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
          </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
        </Button>
            </div>

          </Form>
        </div>
      )
    }
  }

    export default Login