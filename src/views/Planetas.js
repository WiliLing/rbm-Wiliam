
import React, { useState, useEffect, Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  ListView,
  Modal,
  Picker
} from 'react-native'
import _ from 'lodash'
import { SafeAreaView } from 'react-native'
import Container from '../components/Container'
import { ScreenCont } from "../SafeAreaAndroid"
import axios from 'axios'



const Planetas = (props) => {


  const [li, setLi] = useState([])
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate("Informacoes", { residents: item.residents, name: item.name, climate: item.climate, terrain: item.terrain, population: item.population })}
        ><View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>População: {item.population}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
 /*Chamada da API e armazenamento no state*/
  async function chamada() {
    let aux = []
    for (var i = 1; i < 7; i++) {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${i}`)
        aux = aux.concat(response.data.results)
      } catch (error) {
        console.error(error);
      }
    }
    setLi(aux)
  }



  useEffect(() => {

    chamada()
    //configura a navbar
    props.navigation.setOptions({
      headerTitle: (props) => (
        <Text style={styles.name}>Planetas</Text>
      ),
    });
  }, [props.navigation]);

  return (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
      <Container>
        <FlatList
          data={li}
          keyExtractor={(value, index) => index.toString()}
          renderItem={renderItem}
        />
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1, borderBottomColor: '#ffe81f'
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
export default Planetas
