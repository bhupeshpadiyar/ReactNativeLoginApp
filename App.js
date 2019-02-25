import React, { Component } from 'react';
import { AppRegistry, View,  StatusBar, StyleSheet} from 'react-native';
import Routes from './src/Routes.js'
import {name as appName} from './app.json';

class App extends Component {
   render() {
      return (
        <View style={styles.container}>
         <StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"
          />
         <Routes/>
       </View>
      )
   }
}
export default App
AppRegistry.registerComponent(appName, () => App)

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
