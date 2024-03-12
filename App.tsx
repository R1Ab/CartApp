import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/routes/Router'
import { Provider } from 'react-redux'
import MyStore from './src/redux/MyStore'
export default function App() {
  return (

    <Provider store={MyStore}>

      <Router />

    </Provider>

  )
}