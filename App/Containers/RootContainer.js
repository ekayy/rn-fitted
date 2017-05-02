import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from '../Navigation/AppNavigation';
import { connect } from 'react-redux';

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

export default connect(null)(RootContainer);
