import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text,View} from 'react-native';
import { createAppContainer } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import faceBookPage from './screens/faceBookPage'
import instagramPage from './screens/instagramPage'

export default class App extends React.Component {
 render() {
   return(
     <AppContainer/>
   );
 }
}

const TabNavigator = createBottomTabNavigator({
  faceBookPage: {screen: faceBookPage},
  instagramPage: {screen: instagramPage}
})

const AppContainer = createAppContainer (
  TabNavigator
)