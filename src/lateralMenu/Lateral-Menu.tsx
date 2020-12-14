import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { Component } from "react";
import { StatusBar, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export class LateralMenu extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: '#BDA6FF', paddingTop:50, height: '100%', paddingLeft: 10 }}>
                <StatusBar backgroundColor='#BDA6FF' />
                <DrawerContentScrollView {...this.props}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Consultar')} underlayColor='#9784cc'>
                        <Text style={{color:'#FFF', fontSize: 16}} >PESQUISAR</Text>
                    </TouchableHighlight>
                </DrawerContentScrollView>
            </View>
        );
    }
}