import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call'



type Props = {};
export default class Contact extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true
    }
  }

  componentDidMount() {
    fetch('http://192.168.1.212:8089/api/Members/UpdateMember?Id=&ShortName=&FullName=&PhoneNumber=&LicencePlate=&LocationId=&Address=&Note=&UserName=dungn&Password=')
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
    // console.log('############', this.props.navigation);
    const navigation = this.props.navigation;
    let pic = {
      uri: 'https://openclipart.org/image/2400px/svg_to_png/216165/fb_stormshadow.png'
    };

    return (
      <View style={ styles.container }>
        <View style={ styles.viewImage }>
          <Image
            style={ { width: 159, height: 150 } }
            source={ pic }/>
          <View></View>
          <View></View>
        </View>
        <View style={ styles.viewText }>
          <Text style={ styles.typeTextInput }>
            { this.props.navigation.state.params.contactSelected.FullName }
          </Text>
          <Text style={ styles.typeTextInput }>
            { this.props.navigation.state.params.contactSelected.ShortName }
          </Text>
          <Text style={ styles.typeTextInput }>
            { this.props.navigation.state.params.contactSelected.Address }
          </Text>
          <Text style={ styles.typeTextInput }>
            { this.props.navigation.state.params.contactSelected.PhoneNumber }
          </Text>
          <View style={ { flex: 1, margin: 15, flexDirection: 'row' } }>
            <TouchableOpacity style={ { flex: 1 } }>
              <View style={ styles.viewButton }>
                <Text style={ { color: 'blue' } }>
                  Thông Báo
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={ { flex: 1 } }>
              <View style={ styles.viewButton }>
                <Text style={ { color: 'blue' } }>
                  Nhắn Tin
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ () => navigation.navigate('NavigationMap') }
              style={ { flex: 1 } }>
              <View style={ styles.viewButton }>
                <Text style={ { color: 'blue' } }>
                  Điều Hướng
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',

  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    flex: 2,

  },
  typeTextInput: {
    height: 40,
    margin: 10,
    backgroundColor: 'white',
    color: 'red',
    textAlign: 'center',
    fontSize: 20
  },
  viewButton: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  }
});
