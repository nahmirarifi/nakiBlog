import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../theme/Colors'
import { AppContext } from '../hooks/Context'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from './BottomTabs'
import { SplashScreen } from '../screens'

// Stack navigation function
const Stack = createNativeStackNavigator()

const RootStack = () => {
    // Get colors from theme
    const colors = Colors()
    // Get theme mode from context
    const { dark } = AppContext()
    // loading content from  database
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 5000);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
                <StatusBar backgroundColor={colors.statusBar} barStyle={dark ? 'light-content' : 'dark-content'} />
                <NavigationContainer>
                    {/* if app loading show splash screen */}
                    {loading ?
                        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='Splash' component={SplashScreen} />
                        </Stack.Navigator>
                        :
                        // When app finish loading show bottom tabs and other screens
                        <Stack.Navigator initialRouteName='BottomTabs' screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='BottomTabs' component={BottomTabs} />
                        </Stack.Navigator>
                    }

                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default RootStack