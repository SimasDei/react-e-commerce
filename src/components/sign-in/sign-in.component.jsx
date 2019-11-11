import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

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
          <FormInput 
          type="email" 
          name="email" 
          value={this.state.email} 
          required={true} 
          handleChange={this.handleChange}
          label={'Email'}
          />
          <FormInput 
          type="password" 
          name="password" 
          value={this.state.password} 
          required={true} 
          handleChange={this.handleChange}
          label={'Password'}
          />
          <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignIn
