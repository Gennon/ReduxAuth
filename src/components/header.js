import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <LinkContainer to="/signout">
        <NavItem eventKey={1}>Sign Out</NavItem>
      </LinkContainer>
    } 
    else {
      // show a link to sign in or sign up
      return [
        <LinkContainer to="/signin" key={1}>
          <NavItem eventKey={1}>Sign In</NavItem>
        </LinkContainer>,
        <LinkContainer to="/signuo" key={2}>
          <NavItem eventKey={2}>Sign Up</NavItem>
        </LinkContainer>
      ];
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Redux Auth</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {this.renderLinks()}
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
