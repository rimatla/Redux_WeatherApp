import { FETCH_WEATHER } from '../actions/index';

//remember reducers are just functions
export default function (state = [], action) { //store weather data in an array []
    console.log('Action received', action);

    //only fetch weather data type
    switch (action.type) {
        case FETCH_WEATHER:
            //handle the payload
            //concat doesn't change the existing array, instead creates a new one that contains the new and previous data
            return state.concat([action.payload.data]); //data parameter is retrieved from console log above

            //identical code in ES6 syntax
            //return [action.payload.data, ...state];
    }
    return state;
}

//Using concat we don't mutate our state overtime rather we update it. This is key on Redux and React (ie: setState)
//To prevent a can of warms, don't modify/manipulate state directly.
