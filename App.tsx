import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/home/Home';
import { LateralMenu } from './src/lateralMenu/Lateral-Menu';
import { HomeStack } from './src/stacks/Home-Stack';

export default class App extends Component {
  Drawer = createDrawerNavigator();

  render() {
    return (
      <NavigationContainer>
        <this.Drawer.Navigator
          initialRouteName='Consultar'
          drawerContent={props => <LateralMenu {...props} />}
          drawerStyle={{
            backgroundColor: '#BDA6FF'
          }}
        >
          <this.Drawer.Screen name='Consultar' component={HomeStack} />
        </this.Drawer.Navigator>
      </NavigationContainer >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
