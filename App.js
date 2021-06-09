import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCategory from './components/pages/HomeCategory';
import HomeScreen from './components/pages/HomeScreen';
import Alphabets from './components/pages/Aphabets';
import AlphabetDescription from './components/pages/AlphabetDescription';
import DrawAlphabet from './components/pages/DrawAlphabet';
import * as Config from './components/common/config';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import SubCategory from './components/pages/SubCategory';
import SubCategoryDetails from './components/pages/SubCategoryDetails';

const Stack = createStackNavigator();

export default function App() {
  
    return (
      <Provider store={store}>
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

              <Stack.Screen name="DrawAlphabet" 
              component={DrawAlphabet} 
              options={({route}) => ({title: route.params.headerTitle})}/>

              <Stack.Screen name="SubCategory" 
              component={SubCategory} 
              options={({route}) => ({title: route.params.headerTitle})}/>


              <Stack.Screen name="SubCategoryDetails" 
              component={SubCategoryDetails} 
              options={({route}) => ({title: route.params.headerTitle})}/>
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}