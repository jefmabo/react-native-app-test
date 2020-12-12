import { Formik } from 'formik';
import React from 'react';
import { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import { CarSearchResult } from '../models/CarSearchResult';
import { SearchResult } from '../searchresult/SearchResult';
import { Veiculos } from '../services/Veiculos';

export class Home extends Component<{ navigation: any }> {
    private navigation = this.props.navigation;

    constructor(props: any) {
        super(props);
        this.state = {
            carSearchResult: new CarSearchResult()
        }
    }


    async consultarPlaca(placa: string) {
        let veiculos = new Veiculos();
        var result = await veiculos.ConsultarVeiculo(placa);
        this.setState({carSearchResult: result});
    }

    render() {
        return (
            <Formik
                initialValues={{ placa: '' }}
                onSubmit={values => {
                    try {
                        const { placa } = values;
                        this.consultarPlaca(placa);
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {
                    ({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <TextInput
                                    placeholder='Placa'
                                    style={{ borderWidth: 1, width: '99%', height: 40, padding: 3, borderRadius: 3, margin: 5, alignContent: 'center', justifyContent: 'center', borderColor: '#BDA6FF' }}
                                    onChangeText={handleChange('placa')}
                                    onBlur={() => setFieldTouched('placa')}
                                    autoCapitalize='sentences'
                                />
                                <View style={{ width: '99%' }}>
                                    <Button onPress={() => handleSubmit()} title="Pesquisar"></Button>
                                </View>
                                {/* <TouchableHighlight
                                    onPress={() => handleSubmit}
                                    underlayColor='#9784cc'
                                    style={{
                                        backgroundColor: '#BDA6FF',
                                        marginVertical: 5,
                                        height: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 3,
                                        borderColor: '#9784cc',
                                        borderWidth: 1
                                    }}>
                                    <Text style={{ color: '#FFF', fontSize: 16 }}>Salvar</Text>
                                </TouchableHighlight> */}
                            </View>
                            {
                                (this.state.carSearchResult.placa !== '') &&
                                <SearchResult carSearchResult={this.state.carSearchResult} />
                            }
                        </View>
                    )
                }
            </Formik>
        );
    }
}