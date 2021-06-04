import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCategory from './components/pages/HomeCategory';
import HomeScreen from './components/pages/HomeScreen';
import Alphabets from './components/pages/Aphabets';
import AlphabetDescription from './components/pages/AlphabetDescription';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";
import * as Config from './components/common/config';

const Stack = createStackNavigator();
const customFonts = {
  Poppins: require("./assets/Font/Poppins-Bold.ttf"),
  Angsaui: require('./assets/Font/angsaui.ttf')
};

export default function App(props) {
  const [isLoaded] = useFonts(customFonts);
  
    return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Config.APP_BASE_COLOR,
        height: 100
      },
      headerTintColor: '#FFF',
      }}>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}}/>

        <Stack.Screen name="Home Category" component={HomeCategory} options={{
          title: 'Home', 
          headerLeft: null, 
          headerTitleStyle: {
            paddingLeft: 10
          }
          }
        }/>

        <Stack.Screen name="Alphabets" 
        component={Alphabets} 
        options={({route}) => ({title: route.params.headerTitle})}/>

        <Stack.Screen name="AlphabetDescription" 
        component={AlphabetDescription} 
        options={({route}) => ({title: route.params.headerTitle})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}