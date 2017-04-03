import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  Button, Icon
} from 'native-base';

const AppNavigator = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login'
    }
  }
});

export default AppNavigator;
