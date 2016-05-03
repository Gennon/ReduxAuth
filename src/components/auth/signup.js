import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { FormWrapper, FormItem } from '../forms';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <FormWrapper name="Sign Up" 
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        errorMessage={this.props.errorMessage}
        button="Sign Up!">
        <FormItem label="Email:" type="text" field={email} />
        <FormItem label="Password:" type="password" field={password} />
        <FormItem label="Confirm Password:" type="password" field={passwordConfirm} />
      </FormWrapper>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
