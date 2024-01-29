import React from 'react';
import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {name as appName} from './app.json';
import App from './App'; // Replace with the path to your main component

const RootComponent = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootComponent);
