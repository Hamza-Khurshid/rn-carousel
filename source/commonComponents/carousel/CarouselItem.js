import React, { memo } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default memo(function CarouselItem({ item }) {
    return (
        <Image
            source={{ uri: item.images[parseInt(Math.random()*item.images.length)] }}
            style={styles.carouselImage}
        />
    )
})

const styles = StyleSheet.create({
    carouselImage: { 
        height: 200,
        width: width/4,
        resizeMode: 'cover'
    }
})