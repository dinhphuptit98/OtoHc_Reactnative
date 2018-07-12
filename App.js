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
import MapView from './src/view/MapView';
import SettingsView from './src/view/SettingsView';
import Profile from './src/view/Profile';
import History from './src/view/History';

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
      <TouchableHighlight onPress={ () => {
                                <SearchBar
                                  ref='searchBar'
                                  placeholder='Search'
                                  onChangeText='Search'
                                  onSearchButtonPress='Search'
                                  onCancelButtonPress='Search'/>
                              } }>
        <Image source={ require('./src/assets/search.png') }/>
      </TouchableHighlight>
      )
    })
  },
  Contact: {
    screen: Contact
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
      screen: MapView,
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



