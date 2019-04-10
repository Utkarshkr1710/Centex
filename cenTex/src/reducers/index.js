import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import dataForecast from './dataForecast';

const rootReducer = combineReducers({
    dataReducer,
    dataForecast
});

export default rootReducer;