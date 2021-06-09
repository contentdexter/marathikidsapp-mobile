import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DetailImageCard from './../subcomponents/DetailImageCard';
import { ActivityIndicator } from 'react-native-paper';
import * as Config from './../common/config';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import {
    getCurrentAlphabet,
    prepareNextContentIndex,
    preparePrevContentIndex
 } from './../common/service';
 import { useSelector, useDispatch } from 'react-redux';
 import * as Actions from './../common/actions';

const SubCategoryDetails = ({route, navigation}) => {
    let {categoryId, subCategoryId} = route.params;
    const dispatch = useDispatch();
    const [subCategoryDetail, setSubCategoryDetail] = useState(null);
    //const [loader, setLoader] = useState(false);
    const [sound, setSound] = useState();
    const [soundMute, setSoundMute] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);
    const subCategory = useSelector((state) => state.application.subCategory);
    const loader = useSelector((state) => state.application.loader);

    React.useEffect(() => {
        return sound
        ? () => {
            sound.unloadAsync(); 
        }
        : undefined;
    }, [sound]);

    useEffect(() => {
        if (soundMute === true) {
            sound.stopAsync();
        } else {
            playSound(currentSound);
        }
    }, [soundMute])

    useEffect(() => {
        dispatch(Actions.showLoader());
        setSoundMute(false);
        setSound(null);
        setCurrentSound(null);
        prepareDetail(subCategoryId);
    }, [subCategoryId])

    const handleNextPress = () => {
        let nextSubCategory = prepareNextContentIndex(subCategoryId, subCategory);
        navigation.navigate('SubCategoryDetails', {
            categoryId: categoryId, 
            subCategoryId: nextSubCategory.id,
            headerTitle: nextSubCategory.name
        })
    }

    const prepareDetail = (subCategoryId) => {
        let subCategoryList = subCategory.filter(item => item.id === subCategoryId);
        if (subCategoryList.length > 0) {
            setSubCategoryDetail(subCategoryList[0]);
            dispatch(Actions.hideLoader());
            playSound(subCategoryList[0].audio);
        }
    }

    async function playSound(audio) {
        let audioPath = `${Config.SUB_CATEGORY_AUDIO_PATH}${audio}`;
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync({ uri: audioPath }, { shouldPlay: true });
            setSound(sound);
            await sound.playAsync();
        } catch (error) {
            console.log('Error in playing sound')
        }
    }

    const handlePrevPress = () => {
        let nextSubCategory = preparePrevContentIndex(subCategoryId, subCategory);
        navigation.navigate('SubCategoryDetails', {
            categoryId: categoryId, 
            subCategoryId: nextSubCategory.id,
            headerTitle: nextSubCategory.name
        })
    }

    const toggleSoundMute = () => {
        setSoundMute(!soundMute);
    }

    return <View style={styles.container}>
        {
            loader &&
            <ActivityIndicator animating={true} color={Config.APP_BASE_COLOR} size="large"/>
        }
        {
            !loader &&
            <View style={{flex: 1}}>
                <View style={styles.imageContainer}>
                {
                    subCategoryDetail !== null &&
                    <DetailImageCard image = {subCategoryDetail.image} basePath = {Config.SUB_CATEGORY_IMAGE_PATH}/>
                }
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.prevIconContainer}>
                        <AntDesign name="leftcircle" 
                        size = {40} 
                        color = "gray"
                        onPress = {handlePrevPress}/>
                    </View>
                    <View style={styles.soundIconContainer}>
                        {
                            soundMute === false &&
                            <MaterialIcons name="volume-up" size={40} color="white" style={styles.soundIcon} onPress={toggleSoundMute}/>
                        }
                        {
                            soundMute === true &&
                            <MaterialIcons name="volume-off" size={40} color="white" style={styles.soundIcon} onPress={toggleSoundMute}/>
                        }
                    </View>
                    <View>
                        <Entypo name="info" size={40} color="white" style={styles.editIcon}/>
                    </View>
                    <View style={styles.nextIconContainer}>
                        <AntDesign name="rightcircle" 
                        size = {40} 
                        color = "gray" 
                        onPress = {handleNextPress}/>
                    </View>
                </View>
            </View>
        }
    </View>
}

export default SubCategoryDetails;

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
    editIconContainer: {
        flex: 2,
        alignItems: 'flex-start',
        marginRight: 30
    },
    soundIconContainer: {
        flex: 2,
        alignItems: 'flex-start'
    },
    editIcon: {
        backgroundColor: Config.APP_BASE_COLOR,
        borderRadius: 50,
        padding: 20
    },
    soundIcon: {
        backgroundColor: '#17D60A',
        borderRadius: 50,
        padding: 20
    }
})