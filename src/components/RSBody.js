import { View } from 'react-native'
import React from 'react'
import Colors from '../theme/Colors'

const RSBody = ({ children }) => {
    const colors = Colors()

    return (
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
            {children}
        </View>
    )
}

export default RSBody