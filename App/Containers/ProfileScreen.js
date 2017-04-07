import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles/LoginScreenStyles';

class ProfileScreen extends Component {
  render() {
    return(
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
        <View>
          <Text>Name</Text>
          <Text>@username</Text>
          <Text>insert tag / subtitle line here</Text>
          <TouchableOpacity>
            <View>
              <Text>Edit Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
