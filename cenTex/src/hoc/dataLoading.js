import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from '../hoc/circularProgress';

export default class DataLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isDataFound: true
    };
  }

  componentDidMount(){

        setTimeout(() => 
            this.setState({
                isDataFound: false
                    }), 5000);

        // setTimeout(() => {this.props.navigation.navigate("location")}, 3100 );
  }

  componentWillUnmount(){
        console.log('unmounted')
  }

  render() {
      console.log(this.state)
    return (
     
    this.state.isDataFound ?
      <View style = {styles.container}>
        <CircularProgress />
        <Text>
          Loading...
        </Text>  
      </View>
      :
      <View style = {styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          No Data Available!{'\n'} Please try again.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })