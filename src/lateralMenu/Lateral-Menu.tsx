import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { Component } from "react";
import { StatusBar, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export class LateralMenu extends Component<{ navigation: any }> {
    render() {
        return (
            <View style={{ backgroundColor: '#BDA6FF' }}>
                <StatusBar backgroundColor='#BDA6FF' />
                <DrawerContentScrollView {...this.props}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} underlayColor='#9784cc'>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 10 }}>Home</Text>
                        </View>
                    </TouchableHighlight>
                </DrawerContentScrollView>
            </View>
        );
    }
}