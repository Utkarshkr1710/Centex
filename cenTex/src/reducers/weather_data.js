import {
    LOCATION_WEATHER_CURRENT,
    ZIPCODE_WEATHER_DATA
 } from '../actions/types';
  
 initialState = ({
     
 })
 
 export default function(state=initialState,action){
     switch(action.type){
         case LOCATION_WEATHER_CURRENT:
             return {...state, data: action.payload}
 
         case ZIPCODE_WEATHER_DATA:
             return {...state, data: action.payload}
 
         default:
             return state;
     }
 }