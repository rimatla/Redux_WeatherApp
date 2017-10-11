import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    //to set state up initialize it inside of the constructor
    constructor(props) {
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        //console.log(event.target.value);
        this.setState({term: e.target.value});
    }

    //submit form
    onFormSubmit(e) {
        //prevent form default behavior aka page reload
        e.preventDefault();
        //fetch weather data ie:call the action creator whenever user submits the form
        this.props.fetchWeather(this.state.term);
        //clear search input after user submit
        this.setState({term: ''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day for your desired cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
//Wire React + Redux bind action creator fetch weather as a property to this container
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchWeather }, dispatch);
};

//this container doesn't care about state ie:mapStateToProps therefore the first argument goes as null. mapDispatchToProps always goes in as a second argument
export default connect(null, mapDispatchToProps)(SearchBar);