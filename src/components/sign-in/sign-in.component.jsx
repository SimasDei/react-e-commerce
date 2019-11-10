import React, { Component } from 'react'

export class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const {value, name } = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form submit={this.handleSubmit}>
          <input type="email" name="email" value={this.state.email} required={true} onChange={this.handleChange}/>
          <label htmlFor="email">Email</label>
          <input type="password" name="password" value={this.state.password} required={true} onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignIn
