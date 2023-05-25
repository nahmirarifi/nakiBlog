import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '@rneui/themed'
import { Image } from '@rneui/base'
import Colors from '../../../theme/Colors'
import { RSText } from '../../../components'

const ExploreItem = ({ item }) => {
    const colors = Colors()

    return (
        <View style={[styles.card, { borderColor: colors.activeTab }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <RSText title={item.title} style={styles.title} bold white h5 />
        </View>
    )
}

export default ExploreItem

const styles = StyleSheet.create({
    card: {
        width: normalize(105),
        height: normalize(105),
        borderRadius: normalize(100),
        borderWidth: normalize(5),
        marginHorizontal: normalize(15),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(100),
    },
    title: {
        position: 'absolute'
    }
})