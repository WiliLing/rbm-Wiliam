import React , { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'
import Container from '../components/Container'
import {ScreenCont} from "../SafeAreaAndroid"
import Etapa1 from '../views/Etapa1'
import Planets from '../views/Planets'
import SectionListItem from '../components/SectionListItem'

const links = [
    { title: 'Etapa1' },
    { title: 'Planets' },
  ]
  const Home = (props) => {
  useEffect(() => {

    //configura a navbar
    props.navigation.setOptions({
        headerTitle: (props) => (
            <Text>Home</Text>
        ),
    });
}, [props.navigation]);


const navigate = (link) => {    
    const { navigate } = props.navigation
    navigate(link)
  }


const renderItem = ({ item, index }) => {    
    return (
      <TouchableHighlight
        onPress={() => props.navigation.navigate(item.title)}
        style={[ styles.item, { borderTopWidth: index === 0 ? 1 : null} ]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    )
  }


    return (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <View>
            <FlatList
                data={links}
                keyExtractor={(item) => item.title}
                renderItem={renderItem}
            />
        </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    item: {
      padding: 20,
      justifyContent: 'center',
      borderColor: 'rgba(255,232,31, .2)',
      borderBottomWidth: 1
    },
    text: {
      color: '#ffe81f',
      fontSize: 18
    }
  });

export default Home