import React, { Component } from 'react';
import { fire } from '../../config/Fire';
import OAuthButton from '../../components/UI/OAuthButton/OAuthButton';

import { Button, Form } from 'react-bootstrap';

// import UserNavbar from '../../components/Navbar/UserNavBar/UserNavbar';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="success" type="submit" onClick={this.login}>
            Log In
          </Button>
        </Form>
        <OAuthButton />
      </div>
    );
  }
}
export default Login;
