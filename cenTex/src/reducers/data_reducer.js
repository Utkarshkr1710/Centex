import {
   GET_DATA,
   LOCATION_DATA,
   ZIPCODE_DATA

} from '../actions/types';
 
initialState = ({
    
})

export default function(state=initialState,action){
    switch(action.type){
        case LOCATION_DATA:
            return {...state, data: action.payload}

        case ZIPCODE_DATA:
            return {...state, data: action.payload}

        default:
            return state;
    }
}