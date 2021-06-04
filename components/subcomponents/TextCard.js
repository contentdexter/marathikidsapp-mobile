import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text  } from 'react-native';


const TextCard = ({
    name,
    handleClick,
    cardId
}) => {
    return <Card key={name} style={styles.card} onPress={() => handleClick(cardId, name)}>
        <Text style={styles.text}>{name}</Text>
  </Card>
}

export default TextCard;

const styles = StyleSheet.create ({
    card: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 70,
        margin: 5,
        paddingTop: 3,
        borderRadius: 10,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: "Poppins"
    }
 })