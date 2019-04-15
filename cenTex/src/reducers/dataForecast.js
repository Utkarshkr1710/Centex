import {
    LOCATION_DATA_FORECAST,
    ZIPCODE_DATA_FORECAST

 } from '../actions/types';
  
 initialState = ({
     
 })
 
 export default function(state=initialState,action){
     switch(action.type){
         case LOCATION_DATA_FORECAST:
             return {...state, data: action.payload}
 
         case ZIPCODE_DATA_FORECAST:
             return {...state, data: action.payload}
 
         default:
             return state;
     }
 }