import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import * as Config from './../common/config';

const SubCategoryCard = ({
    name,
    handleClick,
    cardId,
    image
}) => {
    let imagePath = `${Config.SUB_CATEGORY_IMAGE_PATH}${image}`;
    return <Card key={name} style={styles.card} onPress={() => handleClick(cardId, name)}>
        <Card.Cover source={{ uri: imagePath }} style={styles.img}/>
      </Card>
}

export default SubCategoryCard;

const styles = StyleSheet.create ({
    card: {
        justifyContent: 'center',
        flex:1,
        borderRadius: 20,
        height: 200,
        alignItems: 'center',
        margin: 5
    },
    img: {
    width: 150
    }
 })