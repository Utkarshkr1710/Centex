import axios from 'axios';
import {
    GET_DATA,
    ZIP_CODE_INPUT,
    ZIPCODE_DATA,
    ZIPCODE_DATA_FORECAST
} from './types';

export function zipCodeData(text){

    const pinCode = text;
    const API_URL = `
    http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${pinCode}&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: ZIPCODE_DATA,
        payload: request
    }
}

export function zipCodeDataForecast(text){

    const pinCode = text;
    const API_URL2 = `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${pinCode}&date=2019-04-10&distance=25&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`


    const request = axios.get(`${API_URL2}`)
                    .then(response => response.data)
                    .catch(err => console.error(err));
                    

    return {
        type: ZIPCODE_DATA_FORECAST,
        payload: request
    }
}

