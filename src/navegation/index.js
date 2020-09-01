import React from 'react'
import { SafeAreaView}  from 'react-native'
import {ScreenCont} from "../SafeAreaAndroid";
import { NavigationContainer}from '@react-navigation/native'
import Stack from './Stack'



export default props => (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
    
)