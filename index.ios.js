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
            // log 打印出NSlog中的内容（addEvent：暴露出去的native modules）
            CalendarManager.addEvent('拉面大派对', '松户')
          }}
        >
          <Text>touch use native modules</Text>
        </TouchableOpacity>  
        <TouchableOpacity
          onPress={ () => {
            // log 打印出NSlog中的内容（addEvent：暴露出去的native modules）
            CalendarManager.addEventMoreDate('🎃狂欢', '涩谷',1509379200)
          }}
        >
          <Text>touch use native modules2</Text>
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
