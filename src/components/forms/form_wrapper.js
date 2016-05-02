import React, {Component} from 'react';
import { Col, Well } from 'react-bootstrap';

class FormWrapper extends Component {
  render() {
    return (
      <Col md={6} mdOffset={3}>
        <Well>
          <h3>{this.props.name}</h3>
          <form onSubmit={this.props.onSubmit}>
            {this.props.children}
          </form>
        </Well>
      </Col>
    );
  }
}

export default FormWrapper;