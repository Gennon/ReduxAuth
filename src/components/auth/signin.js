import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Button, Well, Col} from 'react-bootstrap';
import FormItem from '../forms/form_item';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
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
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <Col md={6} mdOffset={3}>
        <Well>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <FormItem label="Email:" type="text" field={email} />
            <FormItem label="Password:" type="password" field={password} />
            {this.renderAlert()}
            <Button type="submit" bsStyle="primary">Sign in</Button>
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
