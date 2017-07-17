import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  //state: (state = {}) => state

  //wire in reducer_weather.js
  weather: WeatherReducer

});

export default rootReducer;


