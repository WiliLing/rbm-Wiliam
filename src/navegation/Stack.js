import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Planets from '../views/Planets'
import Home from '../views/Home'
import Etapa1 from '../views/Etapa1'
import Container from '../components/Container'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}  options={{ title: 'Home' }
        }/>
            <Stack.Screen name="Etapa1" component={Etapa1}  options={{ title: 'Etapa1' },
            {headerStyle:{borderBottomWidth: 1,
                borderBottomColor: '#ffe81f',
                backgroundColor: 'black',},
                headerTintColor:'#ffe81f',
                headerPressColorAndroid:'white'}
        }/>
    </Stack.Navigator>
)