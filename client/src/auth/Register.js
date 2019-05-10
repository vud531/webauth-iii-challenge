import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return [
        <h2>Register</h2>,
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
        ]
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.error('Register Error', err);
      });
  };
}

export default Register;
