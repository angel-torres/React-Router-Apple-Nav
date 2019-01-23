import React, { Component } from 'react'
import MainNavComponent from './MainNavComponent';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appleData: props.appleData,
        }
    }

    render() {
        return (
        <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}} >
            {this.state.appleData.map( component => (<MainNavComponent component={component}/>))}
        </div>
        )
    }
}
