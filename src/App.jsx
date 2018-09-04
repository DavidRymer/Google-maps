import React, { Component } from 'react';
import CurrentLocation from "./CurrentLocation";
import MapContainer from './MapContainer';
import Search from './Search';



class App extends Component {
    constructor(props) {
        super(props);
        console.log("App Constructor");
        this.state = {
            currentAddress: "Manchester",
            mapCoordinates: {
                lat:53.474080, 
                lng: -2.286060
            }
        } 
        this.searchForAddress = this.searchForAddress.bind(this);


    }

    componentDidMount() {
        console.log("App componentDidMount");
    }

    componentDidUpdate() {
        console.log("App componentDidUpdate");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App getDerivedStateFromProps");
        console.dir(props);
        console.dir(state);
        return state;


    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("App getSnapShotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("App shouldComponentUpdate");
        console.dir(nextProps);
        console.dir(nextState);

        return !(JSON.stringify(nextProps) === JSON.stringify(this.props)
                 && JSON.stringify(nextState) === JSON.stringify(this.state));
    }

    compononetWillUnmount() {
        console.log("App componentWillUnmount");
    }

    async searchForAddress(address) {
        const concatAddress = address.replace(' ', '+');
        var currentState = this.state;
        currentState.currentAddress = address;
        try {
            const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=${'+concatAddress+'}';
            let response = await fetch(url);
				let responseJSON = await response.json();
				currentState.mapCoordinates = await responseJSON.results[0].geometry.location;
				console.log(currentState.mapCoordinates);
        }
        catch (error){
            currentState.currentAddress = "Location not found...";
            currentState.mapCoordinates.lat = 0;
            currentState.mapCoordinates.lng = 0;
        }
        
        this.setState({
			currentState
		});
    }


    render() {
        console.log("App Render");
        return (
            <React.Fragment>
                <div> <h1>Your Google Maps Location</h1>
                    <Search onSearch = {this.searchForAddress} />
                    <MapContainer coords = {this.state.mapCoordinates} />
                    <CurrentLocation address = {this.state.currentAddress} /> </div>



            </React.Fragment>
        );
    }
}

export default App;
