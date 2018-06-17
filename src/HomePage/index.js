import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Stock Collection Management App</h1>
                <p>Welcome to the Stock Collection Management App</p>
                <Link to="/stocks">My Stocks</Link>
            </div>
        );
    }
}