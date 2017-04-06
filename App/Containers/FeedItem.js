import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card, CardItem, Text, Button, Icon, Body, Right
} from 'native-base';

class FeedItem extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image
            style={{ flex: 1, resizeMode: 'cover' }}
            source={require('../Images/fit1.png')}
          />
        </CardItem>

        <CardItem>
          <Icon active name="person" />
          <Text>Username</Text>

          <Right>
            <Body style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>312</Text>
              </Button>

              <Button transparent>
                <Icon active name="thumbs-down" />
                <Text>17</Text>
              </Button>
            </Body>
          </Right>

        </CardItem>
      </Card>
    );
  }
}

export default FeedItem;
