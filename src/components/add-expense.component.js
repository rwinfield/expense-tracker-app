import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddExpense extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTransaction = this.onChangeTransaction.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            transaction: '',
            amount: 0,
            date: new Date(),
            description: '',
            members: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        members: response.data.map(member => member.name),
                        name: response.data[0].name
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeTransaction(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeAmount(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const expense = {
            name: this.state.name,
            transaction: this.state.transaction,
            amount: this.state.amount,
            date: this.state.date,
            description: this.state.description
        }
    
        console.log(expense);
    
        axios.post('http://localhost:5000/expenses/add', expense)
            .then(res => console.log(res.data));
    
        window.location = '/';
    }

    render() {
        return (
            <div className="content">
                <h3>Add expense</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Name: </label>
                    <select ref="nameInput"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}> {
                            this.state.members.map(function(name) {
                            return <option 
                                key={name}
                                value={name}>{name}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="form-group"> 
                    <label>Transaction: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.transaction}
                        onChange={this.onChangeTransaction}
                        />
                    </div>
                    <div className="form-group">
                    <label>Amount: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.amount}
                        onChange={this.onChangeAmount}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
                </div>
        )
    }
}