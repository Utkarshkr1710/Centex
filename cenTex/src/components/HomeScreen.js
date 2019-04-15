import React, { Component } from "react";
import {connect} from 'react-redux';
import {zipCodeData, zipCodeDataForecast, zipCodeWeatherData} from '../actions/zip_code_data';
import {locationData, locationDataForecast, locationWeatherCurrent} from '../actions/location_data';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput
} from "react-native";
import SplashSreen from "./SplashSreen";
import { Button } from "react-native-elements";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true, showLocationButton: false, pinCode: null,
    latitude: 0,
    longitude: 0
    };
  }


  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }
    )
  }



  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };
  openLocation = () =>{
    this.props.navigation.navigate("Home");
    this.props.dispatch(locationData(this.state.latitude, this.state.longitude));
    this.props.dispatch(locationDataForecast(this.state.latitude, this.state.longitude));
    this.props.dispatch(locationWeatherCurrent(this.state.latitude, this.state.longitude));
  }

  showLocationButton = () => {
    const { showLocationButton, pinCode } = this.state;
    if (!showLocationButton && pinCode == null) {
      this.setState({ showLocationButton: true });
    } else if (showLocationButton && pinCode == null) {
      alert("Please enter zip code");
    } else {
      this.props.navigation.navigate("Home");
      this.props.dispatch(zipCodeData(pinCode))
      this.props.dispatch(zipCodeDataForecast(pinCode))
      this.props.dispatch(zipCodeWeatherData(pinCode))
    }
  };
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { showLocationButton } = this.state;

    if (this.state.isLoading) {
      return <SplashSreen />;
    }
console.log(this.state)
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="royalblue" />
        <View style={styles.card}>
          <Text style={styles.textLeft}>HOWDY!</Text>
          <Text style={styles.textRight}>
            Let's find your location for the most{"\n"}
            accurate air quality, pollen, and{"\n"}
            weather information.
          </Text>
          <View style={{ flexDirection: "column" }}>
            {!showLocationButton ? (
              <Button
                icon={{
                  name: "sc-telegram",
                  type: "evilicon",
                  color: "white",
                  size: 30
                }}
                buttonStyle={{
                  height: 40,
                  width: 280,
                  borderRadius: 10,
                  backgroundColor: "royalblue"
                }}
                onPress={() =>this.openLocation() }
                title="CURRENT LOCATION"
              />
            ) : (
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Zipcode"
                placeholderTextColor="royalblue"
                onChangeText={pinCode => this.setState({ pinCode })}
                underlineColorAndroid="transparent"
              />
            )}

            <Button
              buttonStyle={{
                height: 40,
                width: 280,
                borderRadius: 10,
                backgroundColor: "royalblue",
                marginTop: 5
              }}
              title="SEARCH BY ZIPCODE"
              onPress={() => this.showLocationButton()}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "royalblue"
  },
  card: {
    borderRadius: 10,
    width: 300,
    height: 400,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "white",
    elevation: 20
  },
  textLeft: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "royalblue",
    fontWeight: "bold",
    textAlign: "center"
  },
  textRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    color: "black",
    //fontWeight:'bold',
    textAlign: "center"
  },
  TextInput:{
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:8
  }
});

function mapStateToProps(state) {
  return {
     state
  };
}


export default connect(mapStateToProps)(HomeScreen);