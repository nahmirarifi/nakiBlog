import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../theme/Colors'
import { HomeScreen, ProfileScreen } from '../screens'
import { Feather, AntDesign } from '@expo/vector-icons';
import adjust from '../utils/adjust'


const Tabs = createBottomTabNavigator()

const BottomTabs = () => {

    // Theme colors call function
    const colors = Colors()

    return (
        <Tabs.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopColor: colors.bg, backgroundColor: colors.bg }
            }}
        >
            <Tabs.Screen name='News' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="trending-up"
                            color={focused ? colors.activeTab : colors.tab}
                            size={focused ? adjust(20) : adjust(18)}
                        />
                    )
                }}
            />

            <Tabs.Screen name='Menu' component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="bars"
                            color={focused ? colors.activeTab : colors.tab}
                            size={focused ? adjust(20) : adjust(18)}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs