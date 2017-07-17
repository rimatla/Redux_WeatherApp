import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        //conversion to Fahrenheit to Celcius hack
        //const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp -32) /1.8 );


        //console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" unit="˚"/></td>
                <td><Chart data={pressures} color="green" unit="hPa"/></td>
                <td><Chart data={humidities} color="black" unit="%"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//wire up to reducer
/*

function mapStateToProps(state) {
    return { weather: state.weather}; //weather was the key defined as state on our reducer index.js
}

 */

//ES6 Syntax
function mapStateToProps({weather}) { //whenever passing just one argument
    return { weather }; //whenever key and value are completely identical
}

export default connect(mapStateToProps)(WeatherList);

/*
 Per documentation sparklines expect an array of plain numbers

 Produce an array of numbers for:
 Temperature, pressure, humidity  that can be found:
 console.log('Action received', action);
 payload/data/city/list/main

 We need to get this data drilled inside to output a simple flat array to work w/ sparklines.
 */