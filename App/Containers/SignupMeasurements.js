import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native';
import Styles from './Styles/LoginScreenStyles';
import {Metrics} from '../Themes';

class SignupMeasurements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    };
    this.isAttempting = false;
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text>Height*</Text>
            <TextInput />
          </View>

          <View style={Styles.row}>
            <Text>Weight*</Text>
            <TextInput/>
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

}

export default SignupMeasurements;
