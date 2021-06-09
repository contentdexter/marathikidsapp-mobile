import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ScrollView  } from 'react-native';
import SubCategoryCard from './../subcomponents/SubCategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './../common/actions';
import { ActivityIndicator } from 'react-native-paper';
import * as Config from './../common/config';

const SubCategory = ({ navigation, route }) => {
    let {categoryId} = route.params;
    const dispatch = useDispatch();
    const subCategory = useSelector((state) => state.application.subCategory);
    const loader = useSelector((state) => state.application.loader);

    useEffect(() => {
        dispatch(Actions.fetchAllSubCategory(categoryId));
    }, [])

    const handleAlphabetClick = (subCategoryId, subCategoryName) => {
        navigation.navigate('SubCategoryDetails', {
            categoryId: route.params.categoryId, 
            subCategoryId,
            headerTitle: subCategoryName,
        });
    }

    return <View>
        {
            loader &&
            <ActivityIndicator animating={true} color={Config.APP_BASE_COLOR} size="large"/>
        }
        {
            !loader &&
            <ScrollView>
                <View style = {styles.container}>
                    <FlatList data={subCategory}
                        renderItem={(item) => {
                            let category = item['item'];
                            return <SubCategoryCard name={category.name} 
                            cardId={category.id} 
                            image = {category.image}
                            handleClick = {handleAlphabetClick}/>  
                        }
                    }
                    numColumns={5}
                    style={{margin: 30}}/>
                </View>
            </ScrollView>
        }
        </View>
}

export default SubCategory;

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 5,
        backgroundColor: '#F0FAFA',
    },
    divider: {
        fontSize: 20
    },
    categoryText: {
        paddingLeft: 30,
        fontSize: 20
    }
 })