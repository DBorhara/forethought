import React, { Component } from 'react';
import { fire } from '../../../config/Fire';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Aux from '../../../hoc/Aux/Aux';
import firebase from 'firebase';

class OAuthButton extends Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/tasks',
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {});
  }

  render() {
    return (
      <Aux>
        <StyledFireBaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={fire.auth()}
        ></StyledFireBaseAuth>
      </Aux>
    );
  }
}

export default OAuthButton;
