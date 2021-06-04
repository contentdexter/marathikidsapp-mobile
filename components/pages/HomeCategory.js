import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList  } from 'react-native';
import * as Config from './../common/config';
import CategoryCard from './../subcomponents/CategoryCard';
import { ActivityIndicator } from 'react-native-paper';
import * as Api from './../common/api';

const HomeCategory = ({ navigation }) => {
    const [homeCategories, setHomeCategories] = useState([]);
    const [loader, setLoader] = useState(false);
    
    useEffect(() => {
        setLoader(true);
        let homeCategories = Api.fetchAllCategory();
        homeCategories.then(result => result.json()).then(result => {
            setHomeCategories(result);
            setLoader(false);
        });
    }, []);

    const handleCategoryClick = (categoryId, categoryType, categoryName) => {
        let nextRoute = 'Alphabets';
        switch (categoryType) {
            case '1': nextRoute = 'Alphabets';
        }

        navigation.navigate(nextRoute, {
            categoryId,
            headerTitle: categoryName
        });
    }

    return (
        <View style = {styles.container}>
            {
                loader &&
                <ActivityIndicator animating={true} color={Config.APP_BASE_COLOR} size="large"/>
            }
            {
                !loader &&
                <FlatList data={homeCategories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    let category = item['item'];
                    return <CategoryCard key= {`key-${category.name}`} 
                    category = {category}
                    onPressCategory = {handleCategoryClick}/>  
                }
                }
                mColumns={2}/>
            }
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

export default HomeCategory;