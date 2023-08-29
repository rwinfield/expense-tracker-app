import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between" style={{marginRight: "20px"}}>
                        <Link to="/" className="nav-link sidebar-button-style" style={{ fontSize: "20px" }}>
                            <b>Family</b>
                        </Link>
                        <Link to="/add_family_member" className="nav-link sidebar-button-style">
                            <button className="nav-link" style={{ fontSize: '32px', lineHeight: 1}}><b>+</b></button>
                        </Link>
                    </div>
                <hr />
                <Link to="user/:id" className="nav-link sidebar-button-style text-overflow">Robbie</Link>
                <Link to="user/:id" className="nav-link sidebar-button-style text-overflow">Sameen</Link>
                </div>
            </nav>
        );
    }
}