import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,StatusBar} from 'react-native';
import SplashSreen from './SplashSreen';
import { Button } from 'react-native-elements';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
  super(props);

  this.state = { isLoading: true }
}

performTimeConsumingTask = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      2000
    )
  );
}

async componentDidMount() {
  // Preload data from an external API
  // Preload data using AsyncStorage
  const data = await this.performTimeConsumingTask();

  if (data !== null) {
    this.setState({ isLoading: false });
  }
}

  render() {
    if (this.state.isLoading){
      return <SplashSreen/>;
    }

    const {navigate} = this.props.navigation; 
    return (
      
      <View style={styles.container}>
       <StatusBar
          barStyle="light-content"
          backgroundColor="royalblue"
        />
        <View style={styles.card}>

        <Text style={styles.textLeft}>HOWDY!</Text>
        <Text style={styles.textRight}>Let's find your location for the most{"\n"}
                                          accurate air quality, pollen, and{"\n"}
                                                weather information.
        </Text>
        <View style={{flex:0.5}}>
        <Button
            icon={{name: 'sc-telegram', type: 'evilicon',color:'white',size:30}}
            buttonStyle={{height: 40, width: 280, borderRadius: 10,backgroundColor:'royalblue'}}
            onPress={() => this.props.navigation.navigate('Home')}
            title="CURRENT LOCATION"
        />
        </View>
        <View style={{flex:1}}>
         <Button
         buttonStyle={{height: 40, width: 280, borderRadius: 10,backgroundColor:'royalblue'}}
            ///onPress={onPressLearnMore}
            title="SEARCH BY ZIPCODE"
        />
      
        </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
  },
  card:{
    borderRadius:10,
    width: 300,
    height: 400,
    padding: 10,
    backgroundColor:'white',
    shadowColor:'white',
    elevation:20,
  },
  textLeft: {
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    color:'royalblue',
    fontWeight:'bold',
    textAlign:'center'
  },
  textRight: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontSize:13,
    color:'black',
    //fontWeight:'bold',
    textAlign:'center'
  }

});
  ///render() {
    //const {navigate} = this.props.navigation;
    //return (
      //<Button
        //title="Go to Jane's profile"
        //onPress={() => navigate('Profile', {name: 'Jane'})}
      ///>
    //);
  //}
//}*/