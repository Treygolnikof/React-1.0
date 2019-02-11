import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './navPanel.css';

export default class NavPanel extends Component {
    render() {
        const classLi = this.props.position + "__item";
        const text = this.props.color + " text-decoration-none";
        return (
            <ul className = {this.props.position}>
                <li className = {classLi}>
                    <Link to = "/" className = {text}>
                        <img src = {this.props.img} alt = "logo"/>
                    </Link>
                </li>
                <li className = {classLi}>
                    <Link className = {text} to = "/coffee/">
                        Our coffee
                    </Link>
                </li>
                <li className = {classLi}>
                    <Link className = {text} to = "/goods/">
                        For your pleasure
                    </Link>
                </li>
                <li className = {classLi}>
                    <Link className = {text} to = "/contacts/">
                        Contact us
                    </Link>
                </li>
            </ul>
        );
    }
} 
