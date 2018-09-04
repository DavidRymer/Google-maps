import React, { Component } from 'react';
import CurrentLocation from "./CurrentLocation";
import MapContainer from './MapContainer';



class App extends Component {
    constructor(props) {
        super(props);
        console.log("App Constructor");
        this.state = {
            currentAddress: "Manchester",
            mapCoordinates: {
                lat:53.474080, 
                long: -2.286060
            }
        } 
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
        

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("App getSnapShotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
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




    render() {
        console.log("App Render");
        return (
            <React.Fragment>
               <div> <h1>Your Google Maps Location</h1>
                   <MapContainer coords = {this.state.mapCoordinates} />
                     <CurrentLocation address = {this.state.currentAddress} /> </div>
                


            </React.Fragment>
        );
    }
}

export default App;
