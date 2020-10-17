import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

export class postSignup extends Component {
  state = {
    dataSource: [],
  };
  //my_object = { id: 1, description: "true", status: "alive", Date: new Date().getDate(), likes: 12 };
  postData = () => {
    fetch('http://172.17.0.1:8080/post/signUp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: 'Deuschland',
        description: 'My Post',
        state: 'Alive',
        like: 135,
        user: {id: 4},
        resources: [
          {
            url: 'URL2',
            state: 'Before',
            likes: 200,
            type: 'My Type',
          },
          {
            url: 'URL3',
            state: 'After',
            likes: 100,
            type: 'Ummm...',
          },
        ],
      }),
    })
      .then(response => response.json())
      .then(response => {
        alert(response.description);
      })
      .done();
  };

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.postData} style={styles.button}>
          <Text onPress={this.postData}>Create Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
