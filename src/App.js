import React from 'react'
import { SafeAreaView, Text }  from 'react-native'
import {ScreenCont} from "./SafeAreaAndroid";
import Planets from "./views/Planets"

export default props => (
    <SafeAreaView style={ScreenCont.AndroidSafeArea}>
        <Planets />
    </SafeAreaView>
    
)