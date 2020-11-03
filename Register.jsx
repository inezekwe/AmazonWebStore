import React, { Component } from 'react';
import axios from 'axios'; 

    class Register extends Component {
      constructor() {
        super();
        this.state = {
          email: '',
          password:'',
          age:'',
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { email, password, age } = this.state;
        console.log(this.state)
        axios.post('/register', { email, password, age })
          .then((result) => {
            alert("Succesfully Registered!")
          });
      }

      render() {
        const { email, password, age } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  
    export default Register