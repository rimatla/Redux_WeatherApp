import { FETCH_WEATHER } from '../actions/index';
import { DELETE_CITY } from '../actions/index';

export default function (state = [], action) { //store weather data in an array []
    console.log('Action received', action);
    //only fetch weather data type
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);//avoids mutating state
        case DELETE_CITY:
            return state.filter( weather => weather.city.name !== action.payload.city.name);
        default:
            return state;
    }
}