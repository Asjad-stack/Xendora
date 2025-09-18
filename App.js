import './shim'
import './globals';
import 'react-native-get-random-values';
import 'whatwg-fetch';
import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { LogBox, View } from 'react-native';

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  )
}

export default App