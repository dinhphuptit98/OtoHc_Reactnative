

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


type Props = {};
export default class Cell extends Component {
  render() {
    let pic = {
      uri: 'https://openclipart.org/image/2400px/svg_to_png/216165/fb_stormshadow.png'
    };
    return (
      <TouchableOpacity style={ { height: 100 } }>
        <View style={ styles.container }>
          <View style={ styles.viewImage }>
            <Image
              style={ styles.image }
              source={ pic }/>
          </View>
          <View style={ styles.viewLabel }>
            <Text style={ [styles.viewLabel, { color: 'red', textAlign: 'center' }] }>
              { this.props.name }
            </Text>
            <Text style={ [styles.viewLabel, { color: 'black', textAlign: 'center' }] }>
              { this.props.adress }
            </Text>
            <Text style={ [styles.viewLabel, { color: 'blue', textAlign: 'center' }] }>
              { this.props.numberphone }
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  viewImage: {
    flex: 1,
    height: 100,
  },
  viewLabel: {
    flex: 2,
    height: 100,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
  },
})
