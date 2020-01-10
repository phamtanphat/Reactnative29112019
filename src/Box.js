/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: 'red'}}>
          Value = {this.props.count}
        </Text>
        <Child />
      </View>
    );
  }
}

const mapStateToPops = state => {
  return {count: state};
};

export default connect(mapStateToPops)(Box);
// export default connect(state => { return {state: state} })(Box); 
// export default connect(state => ({state: state}))(Box);