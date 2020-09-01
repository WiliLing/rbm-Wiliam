
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Informacoes from '../views/Informacoes'
import Home from '../views/Home'
import Planetas from '../views/Planetas'
import Introducao from '../views/Introducao'

const Stack = createStackNavigator()


    /*Navegação em stack*/
export default props => (
    <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}  options={{ title: 'Home' },
            {headerStyle:{borderBottomWidth: 1,
                borderBottomColor: '#ffe81f',
                backgroundColor: 'black',},
                headerTintColor:'#ffe81f',
                headerPressColorAndroid:'white'}
        }/>
            <Stack.Screen name="Planetas" component={Planetas}  options={{ title: 'Planetas' },
            {headerStyle:{borderBottomWidth: 1,
                borderBottomColor: '#ffe81f',
                backgroundColor: 'black',},
                headerTintColor:'#ffe81f',
                headerPressColorAndroid:'white'}
        }/>
        <Stack.Screen name="Informacoes" component={Informacoes}  options={{ title: 'Informacoes' },
            {headerStyle:{borderBottomWidth: 1,
                borderBottomColor: '#ffe81f',
                backgroundColor: 'black',},
                headerTintColor:'#ffe81f',
                headerPressColorAndroid:'white'}
        }/>
        <Stack.Screen name="Introducao" component={Introducao}  options={{ title: 'Introducao' },
        {headerStyle:{borderBottomWidth: 1,
            borderBottomColor: '#ffe81f',
            backgroundColor: 'black',},
            headerTintColor:'#ffe81f',
            headerPressColorAndroid:'white'}
    }/>
    </Stack.Navigator>
)


