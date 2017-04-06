import React, { Component } from 'react';
import { Image } from 'react-native';

import {
  Container, Content, Item, Input, Button, Icon, View, Text
} from 'native-base';

class LoginForm extends Component {
  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  onButtonPress() {
    const { navigate } = this.props.navigation;

    navigate('Main');
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>

            <Image style={styles.shadow}>
              <View style={styles.bg}>

                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="Username or Email" />
                </Item>

                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input placeholder="Password" secureTextEntry />
                </Item>

                <Button
                  style={styles.btn}
                  onPress={this.onButtonPress.bind(this)}
                >
                  <Text>Login</Text>
                </Button>

              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
};

export default LoginForm;
