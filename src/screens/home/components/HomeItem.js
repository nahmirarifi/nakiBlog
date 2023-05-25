import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, normalize } from '@rneui/themed'
import Colors from '../../../theme/Colors'
import { RSText } from '../../../components'

const HomeItem = ({ item }) => {
    const colors = Colors()

    return (
        <View style={[styles.card, { backgroundColor: colors.cardBg, shadowColor: colors.shadow }]}>
            {/* Item image */}
            <Image source={{ uri: item.image }} style={styles.image} />
            {/* Item title */}
            <View style={styles.title}>
                <RSText title={item.title} h3 primary bold />
            </View>
            {/* Item Data */}
            <View style={styles.data}>
                <RSText title={item.createdAd} p right bold secondary />
            </View>
        </View>
    )
}

export default HomeItem

const styles = StyleSheet.create({
    card: {
        width: normalize(300),
        height: normalize(330),
        marginHorizontal: normalize(10),
        marginTop: normalize(20),
        borderRadius: normalize(40),
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    image: {
        width: normalize(300),
        height: normalize(190),
        borderRadius: normalize(40),
    },
    title: {
        paddingHorizontal: normalize(10),
        marginTop: normalize(20)
    },
    data: {
        marginTop: normalize(20),
        paddingHorizontal: normalize(10)
    }
})