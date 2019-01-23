import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SubNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const id = this.props.match.params.SubNav;
        const subnav = this.props.appleData.find( object => id === `${object.name}`)
        return (
        <div>
           {subnav.name}
           {subnav.subnav.map( subnavItem => (
            <NavLink to={`/${subnav.name}/${subnavItem.name}`}>
                {subnavItem.name}
            </NavLink>))}
        </div>
        )
    }
}
