import React, { Component } from 'react';

class GoogleMap extends Component {
    //life cycle method which is called immediately after this component gets rendered to the DOM
    componentDidMount(){
        //this how to create an embedded google map inside of our document
        new google.maps.Map(this.refs.map , { //pass in the html reference
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    //The ref system allows us to get a direct 'reference to an html element' that has being rendered to the page
    render(){
        return <div ref="map"/>
    }
}

export default GoogleMap;

