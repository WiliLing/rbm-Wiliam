
import React, { useState, useEffect, Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,

} from 'react-native'
import _ from 'lodash'
import { SafeAreaView } from 'react-native'
import Container from '../components/Container'
import { ScreenCont } from "../SafeAreaAndroid"
import axios from 'axios'

/*Paramentros da tela anterior*/
const Informacoes = (props) => {
  const [li, setLi] = useState([])
  const { residents, name, climate, terrain, population } = props.route.params
  const [isLoading, setIsLoading] = useState(false);

  console.log(name)

  /*Chamada da api puxando residentes em um array*/
  async function chamada() {
    setIsLoading(true);
    let aux = []
    for (var i = 0; i < residents.length; i++) {
      try {
        const response = await axios.get(residents[i])
        console.log(response.data)
        aux.push(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    setLi(aux)
    setIsLoading(false);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}>Altura: {item.height}</Text>
        <Text style={styles.name}>Peso: {item.mass}</Text>
      </View>
    )
  }

  useEffect(() => {
    chamada()
    props.navigation.setOptions({
      headerTitle: (props) => (
        <Text style={styles.name}>Informações</Text>
      ),
    });
  }, [props.navigation]);
  /*Renderiza em uma lista em que cada elemento é um objeto da api*/
  return (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <Container>
        <View style={styles.itemContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>Clima: {climate}</Text>
          <Text style={styles.name}>População: {population}</Text>
          <Text style={styles.name}>Terreno: {terrain}</Text>
        </View>{isLoading ?(<ActivityIndicator size="large" color="#ffe81f" />) :(
        <FlatList
          data={li}
          keyExtractor={(value, index) => index.toString()}
          renderItem={renderItem}
        />
        )}</Container>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1, borderBottomColor: '#ffe81f',
    textAlign: "center",
    alignSelf: "auto"
  },
  name: {
    color: '#ffe81f',
    fontSize: 18
  },
  info: {
    color: '#ffe81f',
    fontSize: 14,
    marginTop: 5
  }
});
export default Informacoes


