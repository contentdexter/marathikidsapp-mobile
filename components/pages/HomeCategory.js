import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList  } from 'react-native';
import * as Config from './../common/config';
import CategoryCard from './../subcomponents/CategoryCard';

const HomeCategory = () => {
    const [homeCategories, setHomeCategories] = useState([]);
    
    useEffect(() => {
        let homeCategories = fetch(`${Config.API_PATH}home-category/app/1`);
        homeCategories.then(result => result.json()).then(result => setHomeCategories(result));
    }, [])

    return (
        <View style = {styles.container}>
          <FlatList data={homeCategories}
          renderItem={(item) => {
                  let category = item['item'];
                return <CategoryCard key= {`key-${category.name}`} name={category.name} image = {category.image} style={styles.card}/>  
              }
            }
          numColumns={2}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        flex:1,
        margin: 20,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 20
    }
 })

export default HomeCategory