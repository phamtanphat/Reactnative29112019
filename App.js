import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextView from './src/TextView';
import Word from './src/Word';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1 , marginHorizontal :50}}>
          <Word />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
