import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

/***
 * To test out just copy this component and render in you root component
 */
export class CommentLoad extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  };

  render() {
    var SampleNameArray = ['Alpha', 'Beeta', 'Gamma'];
    var comments =
      'https://imageog.flaticon.com/icons/png/512/25/25663.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF';
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          {/*Here we will return the view when state is true 
        and will return false if state is false*/}
          {this.state.show ? (
            <View>
              <View>
                {SampleNameArray.map((item, key) => (
                  <Text style={styles.setWidth} key={key}>
                    {' '}
                    {item}{' '}
                  </Text>
                ))}
              </View>
              <TextInput style={styles.TextInput} placeholder="Comment" />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

/***
 * To test out just copy this component and render in you root component
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  TextInput: {margin: 5, width: 150, height: 15},
  setWidth: {margin: 5, width: 150, height: 15},
  imgStyle: {width: 45, height: 45, paddingLeft: 28, margin: 6},
});
