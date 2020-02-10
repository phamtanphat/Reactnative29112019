import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextView from './src/TextView';
import Word from './src/Word';
import {width, height} from './src/dimension';
import MyFlatlist from './src/MyFlatlist';
import MyState from './src/MyState';
import List from './src/List';
import Mymodal from './src/Mymodal';
import Box from './src/Box';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './src/Navigation/Screen1';
import Screen2 from './src/Navigation/Screen2';

//App Todolist
// class App extends Component {
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{flex: 1, marginHorizontal: width / 20}}>
//           <Provider store={store}>
//             <List />
//           </Provider>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// export default App;

//Navigation

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
