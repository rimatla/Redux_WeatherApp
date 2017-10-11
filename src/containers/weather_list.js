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

//ES6 Syntax
function mapStateToProps({weather}) {
    return {weather};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteCity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);