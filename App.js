import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextView from './src/TextView';
import Word from './src/Word';
import {width, height} from './src/dimension';

const words = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];
const name = ['Teo', 'Ti', 'Tun'];
class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: width / 20}}>
          {words.map(item => {
            return <Word en={item.en} vn={item.vn} key={item.id} />;
          })}
          {/* {[
            <TextView en={name[0]} />,
            <TextView en={name[1]} />,
            <TextView en={name[2]} />,
          ]}
          {name.map(item => {
            return <TextView en={item} />
          })} */}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
