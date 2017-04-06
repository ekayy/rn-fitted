import React, { Component } from 'react';
import {
  Container, Content
} from 'native-base';

import FeedItem from './FeedItem';

class FeedList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </Content>
      </Container>
    );
  }
}

export default FeedList;
