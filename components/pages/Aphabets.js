import React, { useContext, useState} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView  } from 'react-native';
import * as Config from './../common/config';
import TextCard from './../subcomponents/TextCard';
import { ALPHABETS } from './../common/translation-config';

const Alphabets = ({ navigation, route }) => {
    const [selectedAlphabet, setSelectedAlphabet] = useState(null);

    const handleAlphabetClick = (alphabetId, alphabetName) => {
        setSelectedAlphabet(alphabetId);
        navigation.navigate('AlphabetDescription', {
            categoryId: route.params.categoryId, 
            alphabetId,
            headerTitle: alphabetName
        });
    }

    return <ScrollView><View style = {styles.container}>
        {
            Object.keys(ALPHABETS[Config.APP_LANGUAGE]).map((category, index) => {
                return <View key={`alphabet-${index}`} style={{flex: 1}}>
                    <Text style={styles.categoryText}>{category}</Text>
                    <FlatList data={ALPHABETS[Config.APP_LANGUAGE][category]}
                        renderItem={(item) => {
                            let alphabets = item['item'];
                            return <TextCard name={alphabets.text} 
                            cardId={alphabets.key} 
                            handleClick = {handleAlphabetClick}/>  
                        }
                    }
                    numColumns={5}
                    style={{margin: 30}}/>
                    </View>;
            })
        }
        
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