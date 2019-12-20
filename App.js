import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>View 1</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={{color: 'red'}}>View 2</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
