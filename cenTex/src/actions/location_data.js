import axios from 'axios';
import {
   LOCATION_DATA,
   LOCATION_DATA_FORECAST
} from './types';
export function locationData(latitude, longitude){
    const lat = `38.919`;
    const long = `-77.013`;

    const API_URL = `http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lat}&longitude=${long}&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: LOCATION_DATA,
        payload: request
    }
}

export function locationDataForecast(){
    const long = `-121.6834`;
    const lat = `38.8580`;

    const API_URL2 = `http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=${lat}&longitude=${long}&date=&{today}&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL2}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: LOCATION_DATA_FORECAST,
        payload: request
    }
}