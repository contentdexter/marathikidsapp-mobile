import React from 'react';
import { StyleSheet, Image } from 'react-native';

const DetailImageCard = ({image, basePath}) => {
  let imagePath = `${basePath}${image}`;
  return <Image source={{uri: imagePath}} style={styles.image}/>
}

export default DetailImageCard;

const styles = StyleSheet.create({
  image: {
      height: 600,
      width: 400,
      borderRadius: 10
  }
})