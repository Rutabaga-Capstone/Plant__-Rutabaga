import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import React, {useState} from 'react'
import {Platform, StatusBar, StyleSheet, View, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import {Provider} from 'react-redux'
import store from './store/store'
import AppNavigator from './navigation/AppNavigator'
import {EXPRESS_SERVER_ADDRESS, EXPRESS_SERVER_PORT} from 'react-native-dotenv'

const client = new ApolloClient({
  uri: `http://${EXPRESS_SERVER_ADDRESS}:${EXPRESS_SERVER_PORT}/graphql`
})

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      </ApolloProvider>
    )
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png')
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      yorkten: require('./assets/fonts/Yorkten-NorReg.otf')
    })
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
