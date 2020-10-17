import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {CommentLoad} from '../../controller/commentLoad';
import {RecycleTestComponent} from '../../controller/recyclerView';

export class StackNav extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Comment: CommentLoad,
    List: {
      screen: RecycleTestComponent,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        title: 'XRevolution',

        headerStyle: {
          backgroundColor: '#5f9ea0',
        },
      }),
    },
  },
  {
    initialRouteName: 'List',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
