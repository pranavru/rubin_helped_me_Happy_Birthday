import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Home from './HomeComponent';
import About from './AboutComponent';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const MenuBottomNavigator =
  createBottomTabNavigator({
    Home: {
      screen: Home,
    },
    About: { screen: About },
  })


const MenuNavigator = createStackNavigator({
  Nav: { screen: MenuBottomNavigator },
});

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>This is Pranav Rupa,relia.</Text>
        <MenuNavigator />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});