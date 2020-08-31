import React from 'react'
import { SafeAreaView}  from 'react-native'
import {ScreenCont} from "../SafeAreaAndroid";
import Planets from "../views/Planets"
import { NavigationContainer}from '@react-navigation/native'
import Stack from './Stack'
import Container from '../components/Container'



export default props => (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
    
)