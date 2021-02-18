import React from 'react';
//import { Text, View } from 'react-native';
//import { styles } from './assets/css/main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Produtos } from './views';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: "Full Stack Eletro",
            //headerShown: false,
            headerStyle: {
              backgroundColor: 'red'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center'
            }
          }}  
        />
        
        <Stack.Screen name="Login" options={{
          headerShown: false
        }} component={Login} />

        <Stack.Screen name="Produtos" component={Produtos} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
