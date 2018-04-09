import React, { Component } from 'react';
import { SecretKeys } from './secretKeys';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(SecretKeys.firebaseSecrets);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>something</Text>
      </View>
    );
  }
}

export default App;
