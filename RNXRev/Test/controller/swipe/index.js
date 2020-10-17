import React from 'react';
import {View, Image, StatusBar, Dimensions, Text} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width,
    height,
  },
};

export class Swipe extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}
