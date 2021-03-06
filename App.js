import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './client/components/Main';
import { Provider } from 'react-redux';
import store from './client/store';
//import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
      <View style={styles.main}>
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'blue',
  },
});
