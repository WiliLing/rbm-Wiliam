
import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableHighlight, Button } from 'react-native'
import { ScreenCont } from "../SafeAreaAndroid"
import Container from '../components/Container'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { render } from 'react-dom'

export default class Introducao extends Component {
    // Estado
    state = {
        cep: '',
        dados: {
            logradouro: '',
            uf: '',
            localidade: ''
        }
    };
    //Api Via Cep
    buscarCep = () => {
        fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`).then(Response => Response.json()).then(data => {
            this.setState({
                dados: data
            })
            console.log(data)
        }).catch(Error => {
            console.log(Error)
        });
    }

    render() {
        return (
            /* SafeArea android*/
            <SafeAreaView style={ScreenCont.AndroidSafeArea}>  
                <Container>
                  {/*Implementação do textInput*/}
                    <View style={styles.border}>
                        <Text style={styles.name}>Bem Vindo</Text>
                        <TextInput style={styles.input}
                            value={this.state.cep}
                            onChangeText={cep => { this.setState({ cep }) }}
                            placeholder='CLIQUE AQUI E DIGITE O CEP'
                            placeholderTextColor='#fcf4a7'
                        />
                    </View>

                    {/*Botão para buscar cep*/}
                    <View>
                        <Container>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.buscarCep}
                            >
                                <Text style={styles.name}>BUSCAR</Text>
                            </TouchableOpacity>
                        </Container>
                    </View>

                {/*Informações*/}
                    <View>
                        <Text style={styles.name}>
                            {this.state.dados.logradouro}
                        </Text>
                        <Text style={styles.name}>
                            {this.state.dados.localidade}
                        </Text>
                        <Text style={styles.name}>
                            {this.state.dados.uf}
                        </Text>
                    </View>

                </Container>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1, borderBottomColor: '#ffe81f'
    },
    name: {
        textAlign: "center",
        color: '#ffe81f',
        fontSize: 18
    },
    info: {
        color: '#ffe81f',
        fontSize: 14,
        marginTop: 5
    },
    input: {
        borderColor: '#ffe81f',
        color: '#ffe81f',
        borderWidth: 1,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        alignSelf: "auto"
    },
    button: {
        borderStyle: "solid",
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        backgroundColor: 'black',
        borderColor: '#ffe81f',
        alignItems: 'center',
        alignSelf: "center"
    },
    border: {
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomColor: '#ffe81f'
    }
});
