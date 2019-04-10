import React, { Component } from "react";
import { connect } from 'react-redux';
import {zipCodeDataForecast} from '../actions/zip_code_data';

import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  YellowBox
} from "react-native";
import Speedometer from "react-native-speedometer-chart";
import PureChart from "react-native-pure-chart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import PropTypes from "prop-types";
// import { weatherConditions } from "./WeatherConditions";

let sampleData = [
  {
    value: 50,
    label: "TRESS",
    color: "green"
  },
  {
    value: 40,
    label: "GRASS",
    color: "darkorange"
  },
  {
    value: 25,
    label: "WEEDS",
    color: "green"
  },
  {
    value: 20,
    label: "MOLD",
    color: "gold"
  }
];

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      value: 0,
      forCastData:[],
    };
  }


  componentDidMount() {
    // this.getForecastData();
  }

  getWeekDay(date){
    let d = new Date(`${date}`)
    let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()];
  }

  colorRender(val){
     
    let categoryColor = null;
     
      if(val >= 0 && val <=50)
        categoryColor = '#28b463';
      else if(val >= 51 && val <=100)
              categoryColor = 'gold';
           else if(val >= 101 && val <=150)
                  categoryColor = 'orange';
                else if(val >= 151 && val <=200)
                        categoryColor = 'red';
                        else if(val >= 201 && val <=300)
                                categoryColor = '800080';
                              else if(val >= 301)
                                      categoryColor = '800000';                    

        return categoryColor;
    }

  render() {
    let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const { dataForecast } = this.props.state;

    console.log("Fore cast Data :: ",this.props.state)
    const uuidv4 = require('uuid/v4');
         
    return (

      <View style={styles.MainContainer}>
        <FlatList
          key = {uuidv4()}
          data= { dataForecast ? dataForecast.data : null }
          renderItem={({ item }) => (
           
            <View
              key = { uuidv4()}
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >

            <View style={{ marginTop: 5 }} key={uuidv4()} >
              
                <Text style={{color:'royalblue',fontSize:16,fontWeight:'bold'}}>{days[(new Date(`${item.DateForecast}`)).getDay()]}</Text>
              
                <Speedometer
                  value={item.AQI}
                  totalValue={100}
                  size={150}
                  outerColor="#d3d3d3"
                  internalColor={this.colorRender(item.AQI)}
                  showText
                  text={item.AQI}
                  textStyle={{ color: 'black' }}
                />
              
              </View>
            <View
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
            >
                <PureChart data={sampleData} type="pie" size={90} />
              
              </View>

              <View style={{marginTop:20}}>
                <MaterialCommunityIcons
                  size={60}
                  name="weather-sunny"
                  color={"black"}
                />
                <Text style={styles.SUNNY}>
    
                  {82}° | {62}°
                </Text>
              </View>
            </View>
          )}
           keyExtractor={(item, index) => item.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === "ios" ? 20 : 0
  },

  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7
  },

  textView: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  },
  SUNNY: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold"
  }
});

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Forecast);