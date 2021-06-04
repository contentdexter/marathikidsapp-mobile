import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AlphabetImageCard from './../subcomponents/AlphabetImageCard';
import * as Api from './../common/api';
import { ActivityIndicator } from 'react-native-paper';
import * as Config from './../common/config';
import { AntDesign, Entypo } from '@expo/vector-icons';

const AlphabetDescription = ({route}) => {
    const [alphabetDescription, setAlphabetDescription] = useState(null);
    const [loader, setLoader] = useState(false);

    let {categoryId, alphabetId} = route.params;
    useEffect(() => {
        setLoader(true);
        let alphabet = Api.fetchAlphabetDescription(categoryId, alphabetId);
        alphabet.then(result => result.json()).then(result => {
            setAlphabetDescription(result);
            setLoader(false);
        })
    }, [])
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
                    <AlphabetImageCard alphabetDescription = {alphabetDescription}/>
                }
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.prevIconContainer}>
                        <AntDesign name="leftcircle" size={40} color="gray"/>
                    </View>
                    <View style={styles.editIconContainer}>
                        <Entypo name="pencil" size={40} color="white" style={styles.editIcon} iconStyle={{size: 5}}/>
                    </View>
                    <View style={styles.soundIconContainer}>
                        <AntDesign name="sound" size={40} color="white" style={styles.soundIcon}/>
                    </View>
                    <View style={styles.nextIconContainer}>
                        <AntDesign name="rightcircle" size={40} color="gray" />
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
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 20
    }
})