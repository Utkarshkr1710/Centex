import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import dataForecast from './dataForecast';
import weatherDataCurrent from './weather_data'; 

const rootReducer = combineReducers({
    dataReducer,
    dataForecast,
    weatherDataCurrent
});

export default rootReducer;