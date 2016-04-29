import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Button, FormControl, FormGroup, ControlLabel, Well, Col} from 'react-bootstrap';

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
            <FormGroup>
              <ControlLabel>Email:</ControlLabel>
              <FormControl type="text" {...email} />
              {email.touched && email.error && <div className="error">{email.error}</div>}
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password:</ControlLabel>
              <FormControl  type="password" {...password} />
              {password.touched && password.error && <div className="error">{password.error}</div>}
            </FormGroup>
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
