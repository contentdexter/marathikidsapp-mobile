import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList  } from 'react-native';
import * as Config from './../common/config';
import CategoryCard from './../subcomponents/CategoryCard';
import { ActivityIndicator } from 'react-native-paper';
import * as Api from './../common/api';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../common/actions';

const HomeCategory = ({ navigation }) => {
   // const [homeCategories, setHomeCategories] = useState([]);
    const dispatch = useDispatch();
    const homeCategories = useSelector((state) => state.application.category);
    const loader = useSelector((state) => state.application.loader);

    useEffect(() => {
        dispatch(Actions.fetchAllCategory());
        dispatch(Actions.showLoader());
    }, []);

    const handleCategoryClick = (categoryId, categoryType, categoryName) => {
        let nextRoute = 'Alphabets';
        switch (categoryType) {
            case '1': nextRoute = 'Alphabets';
            break;
            case '2': nextRoute = 'SubCategory';
            break;
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
                numColumns={2}/>
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