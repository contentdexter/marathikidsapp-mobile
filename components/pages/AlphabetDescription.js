import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AlphabetImageCard from './../subcomponents/AlphabetImageCard';
import * as Api from './../common/api';
import { ActivityIndicator } from 'react-native-paper';
import * as Config from './../common/config';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import {
    getCurrentAlphabet,
    prepareNextAlphabetIndex,
    preparePrevAlphabetIndex
 } from './../common/service';
 import { useDispatch, useSelector } from 'react-redux';

const AlphabetDescription = ({route, navigation}) => {
    let {categoryId, alphabetId} = route.params;
    const [alphabetDescription, setAlphabetDescription] = useState(null);
    const [loader, setLoader] = useState(false);
    const [sound, setSound] = useState();
    const [soundMute, setSoundMute] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);
    const alphabets = useSelector((state) => state.alphabets.alphabets);

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
        setLoader(true);
        setSoundMute(false);
        setSound(null);
        setCurrentSound(null);
        prepareAlphabet(categoryId, alphabetId);
    }, [alphabetId])

    const handleNextPress = () => {
        let nextAlphabet = prepareNextAlphabetIndex(alphabetId, alphabets);
        navigation.navigate('AlphabetDescription', {
            categoryId: categoryId, 
            alphabetId: nextAlphabet.id,
            headerTitle: nextAlphabet.name
        })
    }

    const prepareAlphabet = (categoryId, alphabetId) => {
        let alphabet = alphabets.filter(item => item.id === alphabetId);
        if (alphabet.length > 0) {
            setAlphabetDescription(alphabet[0]);
            setLoader(false);
            playSound(alphabet[0].audio);
        }
    }

    async function playSound(audio) {
        let audioPath = `${Config.ALPHABET_DESCRIPTION_AUDIO_PATH}${audio}`;
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
        let nextAlphabet = preparePrevAlphabetIndex(alphabetId, alphabets);
        navigation.navigate('AlphabetDescription', {
            categoryId: categoryId, 
            alphabetId: nextAlphabet.id,
            headerTitle: nextAlphabet.name
        })
    }

    const toggleSoundMute = () => {
        setSoundMute(!soundMute);
    }

    const handleEditPress = () => {
        let currentAlphabet = getCurrentAlphabet(alphabetId, alphabets);
        navigation.navigate('DrawAlphabet', {
            categoryId: categoryId, 
            alphabetId: currentAlphabet.id,
            headerTitle: currentAlphabet.name
        })
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
                    alphabetDescription !== null &&
                    <AlphabetImageCard image = {alphabetDescription.actual_image}/>
                }
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.prevIconContainer}>
                        <AntDesign name="leftcircle" 
                        size = {40} 
                        color = "gray"
                        onPress = {handlePrevPress}/>
                    </View>
                    <View style={styles.editIconContainer}>
                        <Entypo name="pencil" size={40} 
                        color="white" 
                        style={styles.editIcon} 
                        iconStyle={{size: 5}}
                        onPress = {handleEditPress}/>
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

export default AlphabetDescription;

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
        alignItems: 'flex-end',
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