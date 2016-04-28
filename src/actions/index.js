import axios from 'axios';
import { browserHistory } from 'react-router';
import Firebase from 'firebase';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

const YOUR_FIREBASE_APP = '<YOUR-FIREBASE-APP>';
const ref = new Firebase(`https://${YOUR_FIREBASE_APP}.firebaseio.com`);

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    ref.authWithPassword({ email, password })
      .then(authData => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', authData.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    ref.createUser({ email, password })
      .then((userData) => {
        ref.authWithPassword({email, password})
          .then(authData => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', authData.token);
            browserHistory.push('/feature');
          })
          .catch(error => dispatch(authError(error.code)));
      })
      .catch(error => dispatch(authError(error.code)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  ref.unauth();
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return{
    type: FETCH_MESSAGE,
    payload: "This is it!"
  }
}
