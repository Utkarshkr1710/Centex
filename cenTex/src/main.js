import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import {connect} from 'react-redux';

import { ThemeProvider } from 'react-native-elements';

import { getAllData } from './actions/data_actions';
import Navigations from './navigation/index';


class Main extends Component {
  
  async componentDidMount(){
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission successfully asigned.')
      
    } else{
      console.log('permission denied')
    }
  }

  render() {
    // console.warn("props is :: ", this.props)
    return (
      <ThemeProvider>
          <Navigations />
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
    return {
       forecastData: state
    };
  }

export default connect(mapStateToProps)(Main);