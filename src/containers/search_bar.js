import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

//edit
//export default class SearchBar extends Component {
class SearchBar extends Component {
    //to set state up initialize it inside of the constructor
    constructor(props) {
        super(props);
        this.state = { term: ''};
        //take the existing function and bind it to THIS. Another option is to bind it w/ a fat arrow function in the onChange handler inside the form
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) { //all DOM event handlers, ie: onChange, onClick, onHover, come w/ the event object passed as a argument
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    //submit form
    onFormSubmit(event) {
        event.preventDefault();

        //fetch weather data ie:call the action creator whenever user submits the form
        this.props.fetchWeather(this.state.term);
        //clear search input after user submit
        this.setState({term: ''})
    }

    render() {
        return ( //prevent form default behavior aka page reload
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

//a controlled field is a form element where the value of the input is set by the state of our component, not the other way around.

//bind action creator fetch weather as a property to this container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//connect search-bar container to Redux
export default connect(null, mapDispatchToProps)(SearchBar);
//whenever passing a function ie: fetchWeather that needs to map or dispatch the props of a container, it always goes in as a second argument