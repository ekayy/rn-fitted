import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from '../Navigation/AppNavigation';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <Navigation />
      </View>
    );
  }
}

export default RootContainer;
