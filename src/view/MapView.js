import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class MapView extends Component<Props> {
  render() {
    return (
      <View style={ styles.container }>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'gray'
  }
})

