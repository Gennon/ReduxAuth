import React, {Component} from 'react';
import { PageHeader, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Welcome extends Component {
  render() {
    return (
      <div>
        <PageHeader>Welcome <small>to our place</small></PageHeader>
        <Jumbotron>
          <h3>About</h3>
          <p>This page will show how to do Redux Auth stuff. It even makes use of Firebase auth! How cool is that?!?</p>
          <p>
            <LinkContainer to="/signin">
              <Button bsStyle="primary">Sign in</Button>
            </LinkContainer>
          </p>
        </Jumbotron>    
      </div>
    );
  }
}

export default Welcome;