import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {CustomStyles} from './../../styles';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <Text style={styles.firstName}>Marathi</Text>
                <Text style={styles.middleName}>Kids</Text>
                <Text style={styles.lastName}>App</Text>
            </View>
            <View style={styles.viewBottom}>
                <Button
                onPress={() => {
                  navigation.navigate('Home Category')
                }}
                title="Play"
                type="outline"
                buttonStyle={{height: 50, width: 150, borderRadius: 15}}
                accessibilityLabel="Start learning"
                />
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
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },
    viewBottom: {
      flex: 2,
      justifyContent: 'center'
    }
  });