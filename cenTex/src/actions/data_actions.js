import axios from 'axios';
import {
    GET_DATA
} from './types';

export function getAllData(){

    const API_URL = `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=20002&date=2019-04-08&distance=250&API_KEY=CBDC5761-F8E5-4F48-9773-EE1BF4CA258C`;
    
    const request = axios.get(`${API_URL}`)
                    .then(response => response.data)
                    
    return {
        type: GET_DATA,
        payload: request
    }
}
