import { View, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { RSBody, RSText } from '../../components'
import HomeItem from './components/HomeItem'
import { normalize } from '@rneui/themed'
import ExploreItem from './components/ExploreItem'

const HomeScreen = () => {
    const [data, setData] = useState([
        {
            id: '1',
            image: 'https://www.spazio50.org/wp-content/uploads/2022/08/montagna.jpg',
            title: 'Titolo primo post della montagna',
            description: 'Descrizione primo post per la montagna con foto',
            createdAd: '1/12/2020'
        },
        {
            id: '2',
            image: 'https://travel.thewom.it/content/uploads/sites/4/2022/09/montagna-a-settembre.jpeg',
            title: 'Titolo secondo per la montagna seconda',
            description: 'Descrizione per secondo post con imagine per secondo post post',
            createdAd: '2/12/2020'
        }
    ])
    const [data1, setData1] = useState([
        {
            id: '1',
            image: 'https://www.spazio50.org/wp-content/uploads/2022/08/montagna.jpg',
            title: 'Tech',
        },
        {
            id: '2',
            image: 'https://travel.thewom.it/content/uploads/sites/4/2022/09/montagna-a-settembre.jpeg',
            title: 'Sports',
        },
        {
            id: '23',
            image: 'https://travel.thewom.it/content/uploads/sites/4/2022/09/montagna-a-settembre.jpeg',
            title: 'Foods',
        }
    ])


    return (
        <RSBody>
            {/* Title news */}
            <View style={styles.titleContent}>
                <RSText title={'Trending News'} h3 secondary bold />
            </View>
            {/* FlatList Start */}
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => (
                    <HomeItem item={item} />
                )}
            />
            {/* Title news */}
            <View style={styles.titleContent}>
                <RSText title={'Explore'} h3 secondary bold />
            </View>
            {/* FlatList Explore */}
            <FlatList
                data={data1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({ item }) => (
                    <ExploreItem item={item} />
                )}
            />

        </RSBody>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    titleContent: {
        margin: normalize(15),

    }
})