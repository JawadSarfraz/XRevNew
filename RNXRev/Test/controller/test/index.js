import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.postData} style={styles.button}>
          <Text onPress={this.postData}>Posting Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text onPress={this.login} style={styles.button}>
            POST USERssssss
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  login = () => {
    fetch('http://172.25.39.57:8080/user/signUp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: 'beta',
        last_name: 'gamman',
        dob: 'unknown',
        password: 'NEWPASS',
        email: 'else',
        username: 'xMaX',
        city: 'Isbi',
        country: 'Paki',
        temp: 3,
      }),
    })
      .then(response => response.json())
      .then(res => {
        alert(res);
      })
      .done();
  };

  postData = () => {
    fetch(
      'http://172.25.27.7:8080/com.fundsaccess.services.blueprints.tomee/service/currencies/AUD/by-date?date=2019-08-08',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'yourValue',
          email: 'yourOtherValue',
        }),
      },
    )
      .then(response => response.json())
      .then(res => {
        alert(res);
      })
      .done();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  button: {
    padding: 20,
    textAlign: 'right',
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});
