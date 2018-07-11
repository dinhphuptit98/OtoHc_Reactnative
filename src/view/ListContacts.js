import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Cell from './../models/CellContacts';

type Props = {};
export default class ListContactView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true
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
    if (this.state.isLoading) {
      return (
        <View style={ { flex: 1, padding: 20 } }>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.state.dataSource }
          renderItem={ ({item}) => {
                         return <Cell
                                  navigation={ this.props.navigation }
                                  contactSelected={ item }
                                  name={ item.FullName }
                                  adress={ item.Address }
                                  numberphone={ item.PhoneNumber }/>
                       } }
          keyExtractor={ (item, index) => index.toString() }/>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'gray',
    flex: 1,

  },
});

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Button } from 'react-native';



// type Props = {};
// export default class ListContacts extends Component<Props> {
//   static navigationOptions = {
//     title: 'ListContacts',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={ () => navigate('Contact', {
//                     name: 'Contact'
//                   }) }/>
//       );
//   }
// }