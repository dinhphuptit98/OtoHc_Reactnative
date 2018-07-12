import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default class Profile extends Component<Props> {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.view1 }>
          <Image
            source={ require('./../assets/faceUser.png') }
            style={ styles.image }/>
        </View>
        <View style={ styles.view2 }>
          <TextInput style={ styles.textInput }>
          </TextInput>
          <TextInput style={ styles.textInput }>
          </TextInput>
          <TextInput style={ styles.textInput }>
          </TextInput>
          <TextInput style={ styles.textInput }>
          </TextInput>
          <TextInput style={ styles.textInput }>
          </TextInput>
          <TextInput style={ styles.textInput }>
          </TextInput>
        </View>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'gray'
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 2,
    margin: 30
  },
  image: {
    flex: 1,
  },
  textInput: {
    margin: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 25,
    height: 40

  }
})