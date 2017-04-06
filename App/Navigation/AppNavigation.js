import React from 'react';
import { Button, Icon } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import FeedList from '../Containers/FeedList';

const MainTab = TabNavigator({
  Main: {
    screen: FeedList,
    navigationOptions: {
      title: 'Home',
      header: {
        right: <Button transparent><Icon active name="add-circle" /></Button>,
      },
    },
  },
  Search: {
    screen: FeedList
  },
  User: {
    screen: FeedList
  }
});

const Navigation = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Main: {
    screen: MainTab
  },
});

export default Navigation;
