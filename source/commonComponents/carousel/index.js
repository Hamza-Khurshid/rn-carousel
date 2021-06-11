import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, Button } from 'react-native';

import styles from './style';
import data from './data.json';
import CarouselItem from './CarouselItem';

const { width } = Dimensions.get('window');

export default function Carousel() {
    const galleryRef = useRef()
    const [page, setPage] = useState(0)

    const setActivePos = (isBack) => {
        let position = isBack ? page-1 : page+1;

        // Scrolling flatlist to proper position
        galleryRef?.current?.scrollToOffset({
            offset: position * width,
            animated: true
        })

        setPage(position);
    }

    return (
        <View>
            
            <FlatList
                horizontal
                data={data}
                pagingEnabled
                ref={galleryRef}
                scrollEnabled={false}
                keyExtractor={(item) => item.title}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CarouselItem item={item} key={item.title} />}
            />

            <View style={styles.buttonsContainer}>
                <Button
                    title="  Prev  "
                    disabled={page === 0}
                    onPress={()=>setActivePos(1)}
                />
                <Button
                    title="  Next  "
                    onPress={()=>setActivePos()}
                    disabled={(page+1)*4 >= data.length}
                />
            </View>

        </View>
    )
}
