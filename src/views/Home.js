
import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'
import { ScreenCont } from "../SafeAreaAndroid"
import Container from '../components/Container'

const links = [
  { title: 'Introducao' },
  {title: 'Planetas'}
]
const Home = (props) => {
  useEffect(() => {

    //configura a navbar
    props.navigation.setOptions({
      headerTitle: (props) => (
        <Text style={styles.name}>Teste - RBM - Wiliam Rocha dos Santos -  Star Wars SWAPI</Text>
      ),
    });
  }, [props.navigation]);


  const navigate = (link) => {
    const { navigate } = props.navigation
    navigate(link)
  }


  const renderItem = ({ item, index }) => {
    return (
    <View style={styles.itemContainer}> 
      <TouchableHighlight
        onPress={() => props.navigation.navigate(item.title)}
        style={[styles.button]}>
        <Text style={styles.name}>{item.title}</Text>
      </TouchableHighlight>
    </View>
    )
  }


  return (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
        />
      </Container>
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
});;

export default Home
