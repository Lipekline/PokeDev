import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Home } from './pages/Home';
import { Details } from './pages/Details'

const Stack = createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
           <Stack.Navigator>
              <Stack.Screen name="Home" component= {Home} 
              options={{
                title: 'PokeDev',
                headerStyle: {
                  backgroundColor: '#144FA1',
                  height: 100
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignSelf: 'center'
                },
              }}/>
              <Stack.Screen name="Details" component= {Details} 
              options={{
                title: 'PokeDev',
                headerStyle: {
                  backgroundColor: '#144FA1',
                  height: 100
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignSelf: 'center'
                },
              }}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}
