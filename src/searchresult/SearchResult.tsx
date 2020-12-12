import { Component } from 'react';
import { Text, View } from 'react-native';
import { CarSearchResult } from '../models/CarSearchResult';
import React from 'react';

export class SearchResult extends Component<{ carSearchResult: CarSearchResult }>{
    carSearchResult = this.props.carSearchResult;

    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#777B7E', height: 80, width: 180, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#777B7E', borderColor: '#FFF', borderWidth: 2, borderStyle: 'solid', height: 78, width: 178, borderRadius: 5, alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#FFF', height: '20%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 10 }}>{this.carSearchResult.municipio}-{this.carSearchResult.uf}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.carSearchResult.placa}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: 10, marginTop: 20 }}>
                    <Text>Ano/Modelo: {this.carSearchResult.ano}/{this.carSearchResult.anoModelo}</Text>
                    <Text>Chassi: {this.carSearchResult.chassi}</Text>
                    <Text>Marca: {this.carSearchResult.marca}</Text>
                    <Text>Modelo: {this.carSearchResult.modelo}</Text>
                    <Text>Cor: {this.carSearchResult.cor}</Text>
                    <Text>Situação: {this.carSearchResult.situacao}</Text>
                </View>
            </View>
        );
    }

}