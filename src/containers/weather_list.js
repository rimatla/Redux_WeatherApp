import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { bindActionCreators } from 'redux';
import { deleteCity } from '../actions/index';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(forecast => forecast.main.temp);
        const pressures = cityData.list.map(forecast => forecast.main.pressure);
        const humidities = cityData.list.map(forecast => forecast.main.humidity);
        //const deleteCity = cityData.city.name;

        //coordinates
        /*const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;*/

        //ES6 destructuring
        const { lon, lat } = cityData.city.coord;

        //conversion to Fahrenheit to Celcius hack
        //const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp -32) /1.8 );


        //console.log(temps);
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" unit="˚"/></td>
                <td><Chart data={pressures} color="green" unit="hPa"/></td>
                <td><Chart data={humidities} color="black" unit="%"/></td>
                <td><button onClick={() => this.props.deleteCity(cityData)} className="btn btn-danger">x</button></td>
            </tr>
        )
    }
    render() {
        return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className=".col-sm-4">
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather, this)}
                </tbody>
            </table>
        </div>
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
function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteCity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);

/*
 Per documentation sparklines expect an array of plain numbers

 Produce an array of numbers for:
 Temperature, pressure, humidity  that can be found:
 console.log('Action received', action);
 payload/data/city/list/main

 We need to get this data drilled inside to output a simple flat array to work w/ sparklines.
 */