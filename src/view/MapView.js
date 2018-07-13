import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, UrlTile, LocalTile, AnimatedRegion, Animated } from 'react-native-maps'
export default class MyMapView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,

    }
  }
  componentDidMount() {
    fetch('http://192.168.1.212:8089/api/Members/GetMember')
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.value,
        }, function() {});

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(this.state.dataSource)
    return (
      <View style={ styles.container }>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ { flex: 1 } }
          initialRegion={ { latitude: 21.062950, longitude: 105.836791, latitudeDelta: 0.0922, longitudeDelta: 0.0421, } }>
          <GoogleMap
            latitude={ 21.062950 }
            longitude={ 105.836791 }/>
          <GoogleMap
            latitude={ 21.262950 }
            longitude={ 105.836791 }/>
        </MapView>
      </View>
      );
  }
}

export class GoogleMap extends Component<Props> {

  render() {
    return (
      <View>
        <MapView.Marker
          coordinate={ { latitude: this.props.latitude, longitude: this.props.longitude } }
          title={ this.props.nameMarker }
          description={ this.props.numberphone }/>
      </View>
      );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,


  }
})

