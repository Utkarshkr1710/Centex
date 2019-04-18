import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class CircularProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <ActivityIndicator size={90} color="#4169e1" />
      </View>
    );
  }
}
