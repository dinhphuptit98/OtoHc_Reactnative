/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import ListContactView from './src/view/ListContacts';
import Contact from './src/view/Contact';
import MapView from './src/view/MapView';
import SettingsView from './src/view/SettingsView';

const App = createStackNavigator({
  ListContactView: {
    screen: ListContactView
  },
  Contact: {
    screen: Contact
  },

});

export default createBottomTabNavigator(
  {
    Map: MapView,
    ListContacts: App,
    Settings: SettingsView,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({}) => {
        const {routeName} = navigation.state;
        if (routeName === 'ListContacts'){
        	
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
    },
  }
);




