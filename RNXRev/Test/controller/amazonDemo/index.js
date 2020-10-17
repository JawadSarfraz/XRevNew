import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
//const RNFS = require('react-native-fs');

export class AmazonDemo extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> CapturesCaptures </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    ImagePicker.showImagePicker({}, (response) => {
      const file = {
        uri: response.uri,
        name: response.fileName
      }
      console.log(file);
      const config = {
        keyPrefix: 's3/',
        region: 'eu',
        acess_key: '',
        secret_key: '',
        successActionStatus: 201,
      }

      RNS3.put(file, config).then((response) => {
        console.log(response)
      })
    })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
