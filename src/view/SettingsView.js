import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default class SettingsView extends Component<Props> {
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