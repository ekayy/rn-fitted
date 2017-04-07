import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import FeedItem from './FeedItem';

class FeedList extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </View>
      </ScrollView>
    );
  }
}

export default FeedList;
