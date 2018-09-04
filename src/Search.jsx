import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log("Search constructor");
        this.state = {value: ""};
        this.handleChange = (event) => {
            this.setState({value: event.target.value});
        }
        this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.onSearch(this.state.value);
        }

    }

    componentDidMount() {
        console.log("Search componentDidMount");
    }

    componentDidUpdate() {
        console.log("Search componentDidUpdate");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Search getDerivedStateFromProps");
        console.dir(props);
        console.dir(state);
        return state;


    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Search getSnapShotBeforeUpdate");
        console.dir(prevProps);
        console.dir(prevState);
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Search shouldComponentUpdate");
        console.dir(nextProps);
        console.dir(nextState);

        return !(JSON.stringify(nextProps) === JSON.stringify(this.props)
                 && JSON.stringify(nextState) === JSON.stringify(this.state));
    }

    compononetWillUnmount() {
        console.log("Search componentWillUnmount");
    }

    render() {
        console.log("Search render");
        return (
            <form id = "geocoding_form" className = "form-horizontal" onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <div className = "col-xs-12 col-md-6 col-md-offset-3">
                        <div className = "input-group">
                            <input type = "text" className = "form-control" id = "address" placeholder = "Find a location..." onChange = {this.handleChange} value = {this.state.value}>
                            </input> 
                            <span className = "input-group-btn">
                                <span className = "glyphicon glyphicon-search" aria-hidden = "true" onClick = {this.handleSubmit}></span>
                            </span>
                        </div>
                    </div>
                </div>

            </form>

        );
    }
}

export default Search;