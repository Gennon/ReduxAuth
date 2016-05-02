import React, {Component, PropTypes} from 'react';
import { Button, Col, Well } from 'react-bootstrap';

class FormWrapper extends Component {
  render() {
    return (
      <Col md={6} mdOffset={3}>
        <Well>
          <h3>{this.props.name}</h3>
          <form onSubmit={this.props.onSubmit}>
            {this.props.children}
            {this.renderAlert()}
            <Button type="submit" bsStyle="primary">{this.props.button}</Button>
          </form>
        </Well>
      </Col>
    );
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
}

FormWrapper.propTypes = {
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired
};

export default FormWrapper;