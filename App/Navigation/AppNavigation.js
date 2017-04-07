import React from 'react';
import { Button } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import SignupScreen from '../Containers/SignupScreen';
import SignupMeasurements from '../Containers/SignupMeasurements';
import ProfileScreen from '../Containers/ProfileScreen';
import FeedList from '../Containers/FeedList';
import FeedSingle from '../Containers/FeedSingle';

import Icon from 'react-native-vector-icons/Ionicons';

const SignupStack = StackNavigator({
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
    }
  },
  Signup1: {
    screen: SignupMeasurements,
    navigationOptions: {
    }
  },
  Signup2: {
    screen: SignupScreen,
    navigationOptions: {
    }
  }
}, {
  headerMode: 'none'
});

const MainStack = StackNavigator({
  FeedList: {
    screen: FeedList
  },
  FeedSingle: {
    screen: FeedSingle
  },
}, {
  headerMode: 'none'
});

const ProfileStack = TabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
    }
  },
  ProfileCloset: {
    screen: ProfileScreen,
  },
  ProfileFit: {
    screen: ProfileScreen
  }
}, {
  tabBarOptions: {
  }
});

const MainTab = TabNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: {
      title: 'Home',
      header: {
        right: <Button transparent><Icon active name="ios-add-circle" size={26} /></Button>,
      },
      tabBar: () => ({
        label: 'Home',
        icon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
  },
  Search: {
    screen: FeedList,
    navigationOptions: {
      title: 'Search',
      tabBar: () => ({
        label: 'Search',
        icon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-search' : 'ios-search-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }),
    }
  },
  User: {
    screen: ProfileStack,
    navigationOptions: {
      title: 'Profile',
      header: {
        left: <Button transparent><Icon name="ios-settings" size={26} /></Button>,
        right: <Button transparent><Icon active name="ios-add-circle" size={26} /></Button>,
      },
      tabBar: () => ({
        label: 'Profile',
        icon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }),
    }
  }
});

const Navigation = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Signup: {
    screen: SignupStack,
    navigationOptions: {
      title: 'Signup'
    }
  },
  Main: {
    screen: MainTab,
  },
});

export default Navigation;
