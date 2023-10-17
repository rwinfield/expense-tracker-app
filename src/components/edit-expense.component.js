import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CharacterCounter from "./character-counter.component.js"

export default class AddExpense extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTransaction = this.onChangeTransaction.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeSign = this.onChangeSign.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            member_id: '',
            transaction: '',
            amount: '',
            sign: -1,
            date: new Date(),
            description: '',
            members: [],
            expense: ''
        }
    }

    handleOptionSelect = (option) => {
        this.setState({
            name: option.name,
            member_id: option.id
        });
      };

    componentDidMount() {
        axios.get('http://localhost:5050/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        members: response.data.map(member => ({
                            name: member.name,
                            id: member._id
                        }))
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
        
        const id = window.location.href.split('/')[5];
        axios.get(`http://localhost:5050/expenses/${id}`)
            .then(expense => {
                this.setState({
                    expense: expense.data,
                    name: expense.data.name,
                    member_id: expense.data.member_id,
                    transaction: expense.data.transaction,
                    amount: expense.data.amount['$numberDecimal'].toLocaleString() >= 0 ? Number(expense.data.amount['$numberDecimal'].toLocaleString()) : Number(-1 * expense.data.amount['$numberDecimal'].toLocaleString()),
                    description: expense.data.description,
                    sign: expense.data.amount['$numberDecimal'].toLocaleString() >= 0 ? 1 : -1,
                    date: new Date(expense.data.date.toLocaleString())
                });
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
        const regex = /^-?[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
        if (regex.test(e.target.value) || e.target.value.length == 0) {
            this.setState({
                amount: e.target.value
            })
        }
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

    onChangeSign(sign) {
        this.setState({
            sign: sign * -1
        })
    }

    readSign = () => {
        if (this.state.sign < 0) {
            return ({
                color: 'red',
                sign: '-'
            })
        } 
        else {
            return ({
                color: 'green',
                sign: '+'
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const dropdownButton = document.getElementById("dropdownMenuButton");
    
        const expense = {
            name: this.state.name,
            member_id: this.state.member_id,
            transaction: this.state.transaction,
            amount: (this.state.amount * this.state.sign).toFixed(2),
            date: this.state.date,
            description: this.state.description
        }

        try {
            const id = window.location.href.split('/')[5];
            axios.post(`http://localhost:5050/expenses/update/${id}`, expense)
            window.location = '/';
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h3 className="titles">Edit expense</h3>
                <div className="content">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: <span style={{color: 'red'}}>*</span></label>
                        <div className="dropdown">
                            <button
                                required
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
                                {this.state.members.map(function(member) {
                                        return (<a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => this.handleOptionSelect(member)}
                                        >{member.name}</a>)
                                }.bind(this))}
                            </div>
                        </div>
                    </div>
                    <div className="form-group"> 
                    <label>Transaction: <span style={{color: 'red'}}>*</span></label>
                    {this.state.expense.transaction && (
                        <CharacterCounter max="100" initial={this.state.transaction}>
                            <input
                            value={this.state.transaction}
                            type="text"
                            required
                            className="form-control"
                            onChange={this.onChangeTransaction}
                            />
                        </CharacterCounter>
                        )}
                    </div>
                    <div className="form-group">
                    <label>Amount: <span style={{color: 'red'}}>*</span></label>
                    {this.state.expense.amount && this.state.sign && (
                    <span style={{ display: 'flex', flexDirection: 'row' }}>
                        <button 
                        type="button" 
                        style={{backgroundColor: this.readSign().color, width: '32px', height:'38px', display: 'flex', justifyContent: 'center', alignItems:'center'}}
                        onClick={() => this.onChangeSign(this.state.sign)}>
                            {this.readSign().sign}
                            </button>
                        
                        <input 
                            value = {this.state.amount}
                            type="text" 
                            required
                            className="form-control"
                            onChange={this.onChangeAmount}
                            style={{paddingLeft: '22px', marginLeft:'5px', width: '100%'}}
                            />
                    </span>
                    )}
                    <p className="dollar-sign-form" style={{marginTop: '-46.5px', marginLeft: '35px', width: '10px'}}>$</p>
                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    {this.state.expense && (
                    <CharacterCounter max="200" initial={this.state.description}>
                    <textarea 
                        value={this.state.description}
                        type="text"
                        className="form-control"
                        onChange={this.onChangeDescription}
                        style={{marginBottom: '10px'}}
                        />
                    </CharacterCounter>
                    )}
                    </div>
                    <div className="form-group">
                    <label>Date: <span style={{color: 'red'}}>*</span></label>
                    {this.state.expense.date && (
                    <div>
                        <DatePicker
                        value={this.state.date}
                        required
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    )}
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Save expense" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}