import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ ...this.initialState });
    } catch (error) {
      throw new Error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required={true}
            handleChange={this.handleChange}
            label={'Email'}
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required={true}
            handleChange={this.handleChange}
            label={'Password'}
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
