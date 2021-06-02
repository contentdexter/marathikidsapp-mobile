import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCategory from './components/pages/HomeCategory';
import HomeScreen from './components/pages/HomeScreen';

const Stack = createStackNavigator();

export default function App(props) {
    return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home Category" component={HomeCategory} options={{
          title: 'Home', 
          headerLeft: null, 
          headerStyle: {
            backgroundColor: '#8A2BE2', 
            height: 100
          }, 
          headerTitleStyle: {
            paddingLeft: 10
          }
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}