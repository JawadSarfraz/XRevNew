import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Testing extends Component {
  render() {
    return <ComponentTwo text="Hello" />;
  }
}

export class ComponentTwo extends Component {
  render() {
    return <ComponentThree textTwo={this.props.text} />;
  }
}

class ComponentThree extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.textTwo}</Text>
      </View>
    );
  }
}
