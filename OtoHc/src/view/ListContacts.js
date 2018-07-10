import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Cell from './../models/CellContacts';

type Props = {};
export default class ListContactView extends Component<Props> {
  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ [{ key: 'Devin', numberphone: '0236646656966', adress: 'ha noi' }, { key: 'Jackson', numberphone: '0123678673535', adress: 'thai binh' }, { key: 'James', numberphone: '096453783783', adress: 'nam dinh' }, { key: 'Joel', numberphone: '015783737887', adress: 'ha nam' }, { key: 'John', numberphone: '0357452683737', adress: 'thanh hoa' }, { key: 'Jillian', numberphone: '07823435344', adress: 'thanh pho ho chi minh' }, { key: 'Jimmy', numberphone: '0236646656966', adress: 'da nang' }, { key: 'Julie', numberphone: '09756342347', adress: 'ninh binh' },] }
          renderItem={ ({item}) => {
                       
                         return <Cell
                                  name={ item.key }
                                  adress={ item.adress }
                                  numberphone={ item.numberphone }/>
                       } }/>
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