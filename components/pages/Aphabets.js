import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ScrollView  } from 'react-native';
import TextCard from './../subcomponents/TextCard';
import { useDispatch, useSelector } from 'react-redux';

const Alphabets = ({ navigation, route }) => {
    let {categoryId} = route.params;
    const dispatch = useDispatch();
    const alphabets = useSelector((state) => state.alphabets.alphabets);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_ALPHABETS',
            categoryId: categoryId,
        })
    }, [])
    const handleAlphabetClick = (alphabetId, alphabetName) => {
        navigation.navigate('AlphabetDescription', {
            categoryId: route.params.categoryId, 
            alphabetId,
            headerTitle: alphabetName,
        });
    }

    return <ScrollView><View style = {styles.container}>
        <View key={`alphabet-1`} style={{flex: 1}}>
            <FlatList data={alphabets}
                renderItem={(item) => {
                    let alphabets = item['item'];
                    return <TextCard name={alphabets.name} 
                    cardId={alphabets.id} 
                    handleClick = {handleAlphabetClick}/>  
                }
            }
            numColumns={5}
            style={{margin: 30}}/>
        </View>
    </View>
    </ScrollView>
}

export default Alphabets;
const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 20,
        backgroundColor: '#F0FAFA',
        justifyContent: 'flex-start'
    },
    divider: {
        fontSize: 20
    },
    categoryText: {
        paddingLeft: 30,
        fontSize: 20
    }
 })