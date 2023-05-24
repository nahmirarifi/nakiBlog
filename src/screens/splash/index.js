import { StyleSheet } from 'react-native'
import React from 'react'
import { RSBody, RSText } from '../../components'
import adjust from '../../utils/adjust'
import { UIActivityIndicator } from 'react-native-indicators'

const SplashScreen = () => {
    return (
        <RSBody>
            <UIActivityIndicator color='#0333a2' size={adjust(60)} />
            <RSText
                title={'naki.dev'} p bold center primary
            />
        </RSBody>
    )
}

export default SplashScreen

const styles = StyleSheet.create({

})