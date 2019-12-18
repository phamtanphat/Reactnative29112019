import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#abcef1',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
          <Text style={{backgroundColor: 'white'}}>View 1</Text>
          <Text style={{backgroundColor: 'yellow'}}>View 2</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#e30'}}>
          <Text>View 2</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#b40'}}>
          <Text>View 3</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#a50'}}>
          <Text>View 4</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
