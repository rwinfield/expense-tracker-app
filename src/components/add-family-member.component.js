import React, { Component } from 'react';
import axios from 'axios';

export default class AddUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const member = {
            name: this.state.name
        }

        console.log(member);

        axios.post('http://localhost:5000/users/add', member)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <p>You are on the add-user-component!</p>
            </div>
        )
    }
}