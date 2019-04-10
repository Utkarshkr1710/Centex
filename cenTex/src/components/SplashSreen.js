import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';

export default class SplashSreen extends Component {
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'royalblue' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
           <View style={viewStyles}>
            <StatusBar
          barStyle="light-content"
          backgroundColor="royalblue"
        />
        <Text style={textStyles}>
          CenTex Air
        </Text>
        <Text style={styles.sText}>
        AIR QUALITY   POLLEN   WEATHER 
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});