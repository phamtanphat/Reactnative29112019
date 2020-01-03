/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default class Mymodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
    };
  }
  close = () => {
    this.setState({visibleModal: !this.state.visibleModal});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            this.setState({visibleModal: !this.state.visibleModal});
          }}>
          <Text>Open modal</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.visibleModal}
          onSwipeComplete={() => this.close()}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={{justifyContent: 'center'}}>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button
              testID={'close-button'}
              onPress={() => this.close()}
              title="Close"
            />
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
