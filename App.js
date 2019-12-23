import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextView from './src/TextView';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextView en="One" />
          <TextView en="Two" />
          <TextView en="Three" />
          <TextView en="Four" />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
