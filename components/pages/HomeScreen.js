import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import {CustomStyles} from './../../styles';
import { AntDesign } from '@expo/vector-icons';
import * as Config from './../common/config';

export const HomeScreen = ({ navigation }) => {
    const [playButtonColor, setPlayButtonColor] = useState(Config.APP_BASE_COLOR);

    const colors = [
      'white',
      'black',
      'blue',
      'green',
      'pink',
      'red',
      'purple',
      'yellow',
      'gray',
      'lilac',
    ];
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setPlayButtonColor(randomHex());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    let randomHex = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <Text style={styles.firstName}>Marathi</Text>
                <Text style={styles.middleName}>Kids</Text>
                <Text style={styles.lastName}>App</Text>
            </View>
            <View style={styles.viewBottom}>
                <AntDesign name="playcircleo" size={80} color={playButtonColor} onPress={() => {
                  navigation.navigate('Home Category')
                }}/>
            </View>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'red',
      fontSize: 35,
      fontWeight: 'bold'
    },
    firstName: {
      ...CustomStyles.largeBlueText
    },
    middleName: {
      ...CustomStyles.mediumGreenText
    },
    lastName: {
      ...CustomStyles.smallRedText
    },
    viewTop: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    viewBottom: {
      flex: 2,
      justifyContent: 'center'
    }
  });