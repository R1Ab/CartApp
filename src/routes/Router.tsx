import { View, Text } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Registration from '../screens/Registration';
import Login from '../screens/Login';
import Userlist from '../screens/Userlist';
import AddUser from '../screens/AddUser';
export default function Router() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}
                initialRouteName='User'
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Spalsh' component={Splash} />
                <Stack.Screen name='Registration' component={Registration} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='User' component={Userlist} />
                <Stack.Screen name='AddUser' component={AddUser} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}