import axios from 'axios';
const API_KEY = '1ea325b640e0436fb01ac242e630dec1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},&units=imperial`; //set cities and temperature
    const request = axios.get(url); //this will return a promise that can be handled by our installed library 'redux-promise'
    //console.log('Request:', request);

    //set up action creator
    return {
        type: FETCH_WEATHER,
        payload: request //pass in the request, here we're returning the promise as a payload
    }
}

//middleware have the ability to stop or manipulate actions before they hit any reducers whatsoever
//redux-promise unwrap a promise so we just have to work w/ straight data
//stop the action, wait till the promise resolves amd pass data through
