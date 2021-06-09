import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AlphabetImageCard from './../subcomponents/AlphabetImageCard';
import { AntDesign, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import * as Api from './../common/api';
import { ActivityIndicator } from 'react-native-paper';
import * as Config from './../common/config';
import {
    preparePrevContentIndex,
    prepareNextContentIndex
} from './../common/service';
import { useSelector } from 'react-redux';

const DrawAlphabet = ({route, navigation}) => {
    let {categoryId, alphabetId} = route.params;
    const [alphabetDescription, setAlphabetDescription] = useState(null);
    const [loader, setLoader] = useState(false);
    const alphabets = useSelector((state) => state.application.alphabets);

    useEffect(() => {
        setLoader(true);
        prepareAlphabet(alphabetId);
    }, [alphabetId])

    const prepareAlphabet = (alphabetId) => {
        let alphabet = alphabets.filter(item => item.id === alphabetId);
        if (alphabet.length > 0) {
            setAlphabetDescription(alphabet[0]);
            setLoader(false);
        }
    }

    const handlePrevPress = () => {
        let nextAlphabet = preparePrevContentIndex(alphabetId, alphabets);
        navigation.navigate('DrawAlphabet', {
            categoryId: categoryId, 
            alphabetId: nextAlphabet.id,
            headerTitle: nextAlphabet.name
        })
    }

    const handleNextPress = () => {
        let nextAlphabet = prepareNextContentIndex(alphabetId, alphabets);
        navigation.navigate('DrawAlphabet', {
            categoryId: categoryId, 
            alphabetId: nextAlphabet.id,
            headerTitle: nextAlphabet.name
        })
    }
    
    return <View style={styles.container}>
        {
            loader === true &&
            <ActivityIndicator animating={true} color={Config.APP_BASE_COLOR} size="large"/>
        }
        {
            loader === false && alphabetDescription !== null &&
            <View style={{flex: 1}}>
                <View style={styles.imageContainer}>
                {
                    <AlphabetImageCard image = {alphabetDescription.draw_image}/>
                }
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.prevIconContainer}>
                        <AntDesign name="leftcircle" 
                        size = {40} 
                        color = "gray"
                        onPress={handlePrevPress}
                        />
                    </View>
                    <View style={styles.crossIconContainer}>
                        <Entypo name="cross" 
                        size={30} 
                        color="white" 
                        style={styles.crossIcon}
                        />
                    </View>
                    <View style={styles.refreshIconContainer}>
                        <Feather name="refresh-cw" 
                        size={40} color="white" 
                        style={styles.refreshIcon}
                        />
                    </View>
                    <View style={styles.colorIconContainer}>
                        <FontAwesome name="eyedropper" 
                        size={40} 
                        color="white" 
                        style={styles.colorIcon}/>
                    </View>
                    <View style={styles.nextIconContainer}>
                        <AntDesign name="rightcircle" 
                        size = {40} 
                        color = "gray" 
                        onPress={handleNextPress}
                        />
                    </View>
                </View>
            </View>
        }
    </View>
}

export default DrawAlphabet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    prevIconContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    nextIconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    crossIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    refreshIconContainer: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 30
    },
    colorIconContainer: {
        flex: 2,
        alignItems: 'center'
    },
    crossIcon: {
        backgroundColor: '#000',
        borderRadius: 50,
        padding: 5
    },
    refreshIcon: {
        backgroundColor: '#FC9E40',
        borderRadius: 50,
        padding: 20
    },
    colorIcon: {
        backgroundColor: '#F82441',
        borderRadius: 50,
        padding: 20
    }
})