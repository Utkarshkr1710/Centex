import axios from 'axios';
import {
   LOCATION_DATA,
   LOCATION_DATA_FORECAST,
   LOCATION_WEATHER_CURRENT
} from './types';
export function locationData(latitude, longitude){
    const lat = latitude ? latitude : `38.919`;
    const long = longitude ? longitude : `-77.013`;

    const API_URL = `http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lat}&longitude=${long}&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: LOCATION_DATA,
        payload: request
    }
}

export function locationDataForecast(latitude, longitude){
    
    const lat = latitude ? latitude : `38.919`;
    const long = longitude ? longitude : `-121.6834`;

    const API_URL2 = `http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=${lat}&longitude=${long}&date=&{today}&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL2}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: LOCATION_DATA_FORECAST,
        payload: request
    }
}


export function locationWeatherCurrent(latitude, longitude){

    const lat = latitude ? latitude : `28.611591`;
    const long = longitude ? longitude : `77.384269`;
    
    
    const WEATHER_API = '068967ef2d56a59ad1b9b5fe4c6a63ee';

    const API_URL3 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${WEATHER_API}&units=metric`


    const request = axios.get(`${API_URL3}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: LOCATION_WEATHER_CURRENT,
        payload: request
    }
}
