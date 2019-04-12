import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {weatherConditions} from './WeatherConditions';

//const weatherConditions
const Weather =({weather,temperature,humidity,Max_temp,Min_temp,visibility,windSpeed,pressure}) =>{

  //console.log(weather);

  return (
    <View style={[styles.weatherContainer,
            {backgroundColor:Weather.color}
              ]}>
      <View style={styles.headerContainer}>
         <Text style={styles.tempText}>{temperature}˚</Text>
         <MaterialCommunityIcons 
                    size={60} 
                    name={weatherConditions["Haze"].icon}
                    color={'black'} />
          <Text style={styles.SUNNY}>{weatherConditions["Haze"].title}{'\n'}      {Max_temp}˚ | {Min_temp}˚</Text> 
      </View>
      <View style={styles.RectangleShapeView}> 
      <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around'}}>
      <MaterialCommunityIcons size={40} name="weather-rainy" color={'black'}  style={{alignItems:'center',justifyContent:'center'}} />
           <Text style={styles.humidity}>HUMIDITY{'\n'}    {humidity}%                             
           </Text>
      <MaterialCommunityIcons size={40} name="muffin" color={'black'} style={{alignItems:'center',justifyContent:'center'}}/>
            <Text style={styles.air}>AIR PRESSURE{'\n'}        {pressure}%                               
           </Text>
      </View>
     
       <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around'}}>
       <MaterialCommunityIcons size={40} name="thermometer-lines" color={'black'} style={{alignItems:'center',justifyContent:'center'}}/>
            <Text style={styles.feels}>FEELS LIKE{'\n'}                                
           </Text>
        <MaterialCommunityIcons size={40} name="weather-pouring" color={'black'} style={{alignItems:'center',justifyContent:'center'}}/>
            <Text style={styles.PRECIPITATION}>PRECIPITATION{'\n'}                                     
           </Text>
      </View>
       <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around',}}>
       <MaterialCommunityIcons size={40} name="weather-windy-variant" color={'black'} style={{alignItems:'center',justifyContent:'center',}}/>
       <Text style={styles.wind}>WIND{'\n'} {windSpeed}Km/Hr                               
       </Text>
       <MaterialCommunityIcons size={40} name="cryengine" color={'black'} style={{alignItems:'center',justifyContent:'center'}}/>
       <Text style={styles.visibility}>VISIBILITY{'\n'} {visibility} mi                               
       </Text>
      </View>
     
      </View>
      <View style={styles.bodyContainer}>
        
      </View>
    </View>
  );
};


Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20
  },
  tempText: {
    fontSize:50,
    color: 'black',
    paddingLeft:20,
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  subtitle: {
    fontSize: 24,
    color: 'black'
  },
  details: {
    fontSize: 24,
    color:'black'
  },
  RectangleShapeView: {
  marginTop: 20,
  height: 200,
  backgroundColor:'#E8E8E8',
  },
  humidity:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
  },
  air:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    paddingRight:20
  },
  wind:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
  },
   visibility:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    paddingRight:20
  },
   feels:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
  },
   PRECIPITATION:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    paddingRight:20
  },
  
  SUNNY:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    paddingRight:20
  },
});

export default Weather;