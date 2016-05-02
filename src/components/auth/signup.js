import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import FormItem from '../forms/form_item';
import { Col, Well, Button } from 'react-bootstrap';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <Col md={6} mdOffset={3}>
        <Well>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <FormItem label="Email:" type="text" field={email} />
            <FormItem label="Password:" type="password" field={password} />
            <FormItem label="Confirm Password:" type="password" field={passwordConfirm} />
            {this.renderAlert()}
            <Button action="submit" bsStyle="primary">Sign up!</Button>
          </form>
        </Well>
      </Col>
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
