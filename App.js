/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-search-bar';

import ListContactView from './src/view/ListContacts';
import Contact from './src/view/Contact';
import MyMapView from './src/view/MapView';
import SettingsView from './src/view/SettingsView';
import Profile from './src/view/Profile';
import History from './src/view/History';
import NavigationMap from './src/view/NavigationMap';
const App = StackNavigator({
  ListContactView: {
    screen: ListContactView,
    navigationOptions: ({navigation}) => ({
      title: 'ListContacts',

      headerLeft: (
      <TouchableHighlight onPress={ () => {
                                navigation.openDrawer()
                              } }>
        <Image source={ require('./src/assets/menu.png') }/>
      </TouchableHighlight>
      ),
      headerRight: (
      <TouchableHighlight onPress={ () => alert('OtoHC application has been upgraded .Current version 2.2.2 . For detailed information visit Google.com') }>
        <Image source={ require('./src/assets/help.png') }/>
      </TouchableHighlight>
      )
    })
  },
  Contact: {
    screen: Contact,
  },
  NavigationMap: {
    screen: NavigationMap,
  },
});

const TabBarNavigator = TabNavigator(
  {

    Contacts: {
      screen: App,
      navigationOptions: {
        tabBarIcon: ({}) => {
          return <Image
                   style={ { flex: 1 } }
                   source={ require('./src/assets/add-contacts.png') }/>
        },
      }
    },
    Map: {
      screen: MyMapView,
      navigationOptions: {
        tabBarIcon: ({}) => {
          return <Image
                   style={ { flex: 1 } }
                   source={ require('./src/assets/google.png') }/>
        },
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
    },
  }
);

const Menu = DrawerNavigator({
  Home: {
    screen: TabBarNavigator,
    navigationOptions: {

      drawerIcon: ({}) => (
        <Image
          source={ require('./src/assets/house.png') }
          style={ { flex: 1 } }/>
      )
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {

      drawerIcon: ({}) => (
        <Image
          source={ require('./src/assets/user.png') }
          style={ { flex: 1 } }/>
      )
    }
  },
  History: {
    screen: History,
    navigationOptions: {

      drawerIcon: ({}) => (
        <Image
          source={ require('./src/assets/history.png') }
          style={ { flex: 1 } }/>
      )
    }
  },
  Setting: {
    screen: SettingsView,
    navigationOptions: {
      drawerIcon: ({}) => (
        <Image
          source={ require('./src/assets/settings.png') }
          style={ { flex: 1 } }/>
      )
    }
  },
  SignOut: {
    screen: History,
    title: 'Sign Out',
    navigationOptions: {

      drawerIcon: ({}) => (
        <Image
          source={ require('./src/assets/logout.png') }
          style={ { flex: 1 } }/>

      )
    }
  }
});
export default Menu;



