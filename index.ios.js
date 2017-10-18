/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity
} from 'react-native';

// 导入NativeModules中定义的CalendarManager模块
var CalendarManager = NativeModules.CalendarManager;
export default class rnAddNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={ () => {
            // log 打印出NSlog中的内容
            CalendarManager.addEvent('生日派对', '千叶县松户市牧之原')
          }}
        >
          <Text>touch use native modules</Text>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnAddNative', () => rnAddNative);
