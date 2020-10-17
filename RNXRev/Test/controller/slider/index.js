import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';

export class SliderImp extends React.Component {
  constructor(props) {
    super(props);
    text: 'something';
    this.state = {
      value: 0,
      data: ['asd', 'qwew', 'vcz'],
      joker: [
        'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
        'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
        'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
        'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
      ],
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseInt(value, 10),
      };
    });
  }

  render() {
    width = Dimensions.get('window');
    const {value, data} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground
            style={styles.post}
            source={{uri: this.props.arr[value]}}>
            <View style={styles.container1}>
              <View style={styles.beforeButton}>
                <Button title="Before"></Button>
              </View>
              <View style={styles.afterButton}>
                <Button title="After"></Button>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Slider
            step={1}
            maximumValue={this.props.arr.length - 1}
            onValueChange={this.change.bind(this)}
            value={value}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
  },
  post: {
    width: this.width,
    height: 240,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    textAlignVertical: 'top',
    paddingTop: 9,
    justifyContent: 'center',
    opacity: 0.6,
  },

  beforeButton: {
    width: 120,
  },
  afterButton: {
    width: 120,
    paddingLeft: 10,
  },
  sliderStyle: {
    width: this.width,
    margin: 0,
    padding: 0,
  },
  circle: {
    width: 35,
    height: 30,
    borderRadius: 35 / 2, // also 100 works.FUCKKK.WHY?
  },
  outerContainerView: {
    flex: 1,
    margin: 8,
  },
});
