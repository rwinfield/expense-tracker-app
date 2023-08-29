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

        axios.post('http://localhost:5050/users/add', member)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
          <div className='content'>
            <h3>Create New Family Member</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Family Member: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Add family member" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}