import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.wrapper}>
        <View style={styles.group1}>
          <View style={styles.wrapText}>
            <Text style={styles.textstyle}>A</Text>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.textstyle}>B</Text>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.textstyle}>C</Text>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.textstyle}>D</Text>
          </View>
        </View>
        <View style={styles.group2}>

        </View>
       </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  group1: {
    backgroundColor: `rgb(255, 0, 255)`,
    flex: 1,
    flexDirection: 'column',
  },
  group2: {
    backgroundColor: 'blue',
    flex: 1,
  },
  textstyle: {
    color: 'white',
  },
  wrapText: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
  },
});
export default App;
