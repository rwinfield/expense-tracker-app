import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
    }

    fetchUserData() {
        axios.get('http://localhost:5050/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({members: response.data.map(member => member)});
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchUserData();
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <nav className="sidebar">
                <div className="flex-column">
                    <div className="d-flex justify-content-between" style={{ marginRight: "20px"}}>
                        <Link to="/" className="nav-link sidebar-button-style" style={{ fontSize: "20px" }}>
                            <b>Family</b>
                        </Link>
                        <Link to="/add_family_member" className="nav-link sidebar-button-style">
                            <button className="nav-link" style={{ fontSize: '32px', lineHeight: 1}}><b>+</b></button>
                        </Link>
                    </div>
                    <hr />

                    {this.state.members.map(function(member) {
                        return <a key={member._id} href={`/expenses/user/${member._id}`} className="nav-link sidebar-button-style text-overflow">{member.name}</a>
                    })}


                </div>
            </nav>
        );
    }
}