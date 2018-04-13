import React, { Component } from 'react';
import { SecretKeys } from './secretKeys';
import firebase from 'firebase';
import { View } from 'react-native';
import {
  Card,
  CardSection,
  Header,
  Button,
  Spinner,
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp(SecretKeys.firebaseSecrets);

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => {
              firebase.auth().signOut();
            }}
          >
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
