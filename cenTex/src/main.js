import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

import { ThemeProvider } from 'react-native-elements';

import { getAllData } from './actions/data_actions';
import Navigations from './navigation/index';

class Main extends Component {
  
    componentDidMount(){
        //  this.props.dispatch(getAllData());
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