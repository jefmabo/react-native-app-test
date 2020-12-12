import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Component } from "react";
import { Home } from "../home/Home";

export class HomeStack extends Component<{navigation:any}> {
    Stack = createStackNavigator();
    navigation = this.props.navigation;
    render() {
        return(
            <this.Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#BDA6FF'
              }
            }}>
      
            <this.Stack.Screen name='Consultar' component={Home}
              options={{ title: 'Consultar'}} />
      
          </this.Stack.Navigator>
        );
    }
}