import React, { Component } from 'react';
import Map from './Map';


class MapContainer extends Component {
    constructor(props) {
        super(props);
        console.log("MapContainer constructor");
        this.state = {};

    }

    componentDidMount() {
        console.log("MapContainer componentDidMount");
    }

    componentDidUpdate() {
        console.log("MapContainer componentDidUpdate");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("MapContainer getDerivedStateFromProps");
        console.dir(props);
        console.dir(state);
        return state;


    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("MapContainer getSnapShotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("MapContainer shouldComponentUpdate");
        console.dir(nextProps);
        console.dir(nextState);

        return (nextProps.coords.lat !== this.props.coords.lat &&
                nextProps.coords.lng !== this.props.coords.lng);
    }

    compononetWillUnmount() {
        console.log("MapContainer componentWillUnmount");
    }

    render() {
        console.log("MapContainer render");
        return (
            <div className = "map-overlay">
                <div id = "map">
                    <Map
                        isMarkerShown
                        googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `350px` }} />}
                        mapElement={<div style={{ height: `100%`, maxWidth: `500px`,
                                    margin: `auto 0` }} />}
                        coords={this.props.coords}
                        />

                </div>

            </div>

        );
    }
}

export default MapContainer;
