import React from 'react';
import * as Config from './../common/config';
import { StyleSheet, Image } from 'react-native';

const AlphabetImageCard = ({alphabetDescription}) => {
  let imagePath = `${Config.ALPHABET_DESCRIPTION_PATH}${alphabetDescription.actual_image}`;
  return <Image source={{uri: imagePath}} style={styles.image}/>
}

export default AlphabetImageCard;

const styles = StyleSheet.create({
  image: {
      height: 600,
      width: 400,
      borderRadius: 10
  }
})