import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MainNavComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div style={{display: "flex", justifyContent: "center", color: "white", textDecoration: "none"}}>
            <NavLink to={`/${this.props.component.name}`}>{this.props.component.name}</NavLink>
        </div>
        )
    }
}
