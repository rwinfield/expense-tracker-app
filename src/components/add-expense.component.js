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
            name: 'Select one',
            transaction: '',
            amount: '',
            date: new Date(),
            description: '',
            members: []
        }
    }

    handleOptionSelect = (option) => {
        this.setState({ name: option });
      };

    componentDidMount() {
        axios.get('http://localhost:5050/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        members: response.data.map(member => member.name),
                        // name: response.data[0].name
                    });
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
            transaction: e.target.value
        })
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
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
    
        axios.post('http://localhost:5050/expenses/add', expense)
            .then(res => console.log(res.data));
    
        window.location = '/';
    }

    render() {
        
        return (
            <div className="content">
                <h3>Add expense</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: <span style={{color: 'red'}}>*</span></label>
                        <div className="dropdown">
                            <button
                                className="btn btn-dark dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {this.state.name}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {this.state.members.map(function(name) {
                                        return (<a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => this.handleOptionSelect(name)}
                                        >{name}</a>)
                                }.bind(this))}
                            </div>
                        </div>
                    </div>
                    <div className="form-group"> 
                    <label>Transaction: <span style={{color: 'red'}}>*</span></label>
                    <input  type="text"
                        required
                        className="form-control"
                        onChange={this.onChangeTransaction}
                        />
                    </div>
                    <div className="form-group">
                    <label>Amount: <span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={this.onChangeAmount}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: <span style={{color: 'red'}}>*</span></label>
                    <div>
                        <DatePicker
                        required
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Add expense" className="btn btn-primary" />
                    </div>
                </form>
                </div>
        )
    }
}