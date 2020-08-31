
import React , { useState, useEffect } from 'react'
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


const Etapa1 = (props) => {
   const State = {
        data: [],
        loading: true,
        modalVisible: false,
        gender: 'all',
      };

    const   renderItem = ({ item }) => {    
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>Population{item.population}</Text>
            <Text style={styles.info}>Personagens: {item.residents[id]}</Text>
            <Text style={styles.info}>Filmes: {item.gender[id]}</Text>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.openPressItem(item.planets)}
            >
              <Text style={styles.info}></Text>
            </TouchableHighlight>
          </View>
        )
      }
      
      
    useEffect(() => {
     fetch('https://swapi.dev/api/planets/1/')
      .then(res => res.json())
      .then(json => this.setState({ data: json.results, loading: false }))
      .catch((err) => console.log('err:', err))

        //configura a navbar
        props.navigation.setOptions({
            headerTitle: (props) => (
                <Text>Etapa 1</Text>
            ),
        });
    }, [props.navigation]);
    return(
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <Container>
        </Container>
    </SafeAreaView>
    )
}


export default Etapa1

