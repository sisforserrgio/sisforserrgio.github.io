import React from 'react';

//import axios from 'axios'; // to change to fetch api


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      invalid: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  console.log(this.state);
  this.props.userSignupRequest(this.state);
}

render() {
  return (
    <form onSubmit={this.onSubmit}>
    <h1>hohoho</h1>
    <div className="form">
      <input
        value={this.state.username}
        onChange={this.onChange.bind(this)}
        name="username"
        type="text"
        placeholder="username"
        required
        />
      <input
        value={this.state.password}
        onChange={this.onChange.bind(this)}
        name="password"
        type="password"
        placeholder="password"
        required
        />
    </div>
    <button className="btn btn-primary btn-lg">
            Sign up
          </button>
    </form>
  );
}
}

SignUp.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};


export default SignUp;
