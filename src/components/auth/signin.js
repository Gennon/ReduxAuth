import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { FormWrapper, FormItem } from '../forms';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <FormWrapper name="Sign In" 
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        errorMessage={this.props.errorMessage}
        button="Sign In!">
        <FormItem label="Email:" type="text" field={email} />
        <FormItem label="Password:" type="password" field={password} />
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
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
