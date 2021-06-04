import React from 'react';
import { Card } from 'react-native-paper';
import * as Config from './../common/config';
import { StyleSheet  } from 'react-native';

const CategoryCard = ({
  category,
  onPressCategory
}) => {
    return <Card key={category.name} style={styles.card} onPress={() => {
        onPressCategory(category.id, category.type, category.name);
      }}>
    <Card.Cover source={{ uri: `${Config.HOME_CATEGORY_IMAGE_PATH}${category.image}` }} style={styles.image}/>
    <Card.Title title={category.name} />
  </Card>
}

export default CategoryCard;

const styles = StyleSheet.create ({
    card: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 250,
        margin: 5,
        paddingTop: 10,
        borderRadius: 20
    },
    image: {
        width: 80,
        height: 150,
        marginBottom: 20
    }
 })