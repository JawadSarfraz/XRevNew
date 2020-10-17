import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

export class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  signUp = async () => {
    const {name, password, email, gender} = this.state;
    fetch('192.168.1.101:8080/user/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'asdwqa',
        password: 'aasd2as',
        email: 'a5@adwzxqe.com',
        gender: 'asd1qq',
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('gender', val)}
        />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
