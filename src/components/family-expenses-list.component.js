import React, { Component } from 'react';
import axios from 'axios';

export default class FamilyExpensesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5050/expenses/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({expenses: response.data.map(expense => expense)});
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content">
                {this.state.expenses.map(expense => (
                    <div className="expense-tile" key={expense._id}>
                        <div className="expense-details" >
                            <span className="category">{expense.amount['$numberDecimal'].toLocaleString()}</span>
                            <p>{expense.transaction}</p>
                        </div>
                        <span className="date">{new Date(expense.date).toLocaleDateString()}</span>
                        <div className="user-name">{expense.name}</div>
                    </div>
                ))}


                {/* <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Income</span>
                        <p>Paycheck</p>
                    </div>
                    <span className="amount positive-amount">+$1000</span>
                    <div className="user-name">Robbie</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Food</span>
                        <p>Lunch at a local cafe</p>
                    </div>
                    <span className="amount negative-amount">-$15</span>
                    <div className="user-name">Sameen</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Transportation</span>
                        <p>Purchased a metro pass</p>
                    </div>
                    <span className="amount negative-amount">-$30</span>
                    <div className="user-name">John</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Entertainment</span>
                        <p>Movie night with friends</p>
                    </div>
                    <span className="amount negative-amount">-$20</span>
                    <div className="user-name">Robbie</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Food</span>
                        <p>Dinner at a new restaurant</p>
                    </div>
                    <span className="amount negative-amount">-$40</span>
                    <div className="user-name">Sameen</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Shopping</span>
                        <p>Bought new clothes</p>
                    </div>
                    <span className="amount negative-amount">-$100</span>
                    <div className="user-name">John</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Income</span>
                        <p>Birthday money</p>
                    </div>
                    <span className="amount positive-amount">+$50</span>
                    <div className="user-name">Robbie</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Food</span>
                        <p>Order pizza for friends</p>
                    </div>
                    <span className="amount negative-amount">-$25</span>
                    <div className="user-name">Sameen</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Transportation</span>
                        <p>Filled up gas tank</p>
                    </div>
                    <span className="amount negative-amount">-$50</span>
                    <div className="user-name">John</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Shopping</span>
                        <p>Bought electronics</p>
                    </div>
                    <span className="amount negative-amount">-$200</span>
                    <div className="user-name">Robbie</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Food</span>
                        <p>Expensive dinner at a restaurant</p>
                    </div>
                    <span className="amount negative-amount">-$75</span>
                    <div className="user-name">Sameen</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Transportation</span>
                        <p>Filled up gas tank</p>
                    </div>
                    <span className="amount negative-amount">-$50</span>
                    <div className="user-name">John</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Shopping</span>
                        <p>Bought electronics</p>
                    </div>
                    <span className="amount negative-amount">-$200</span>
                    <div className="user-name">Robbie</div>
                </div>
                <div className="expense-tile">
                    <div className="expense-details">
                        <span className="category">Food</span>
                        <p>Expensive dinner at a restaurant</p>
                    </div>
                    <span className="amount negative-amount">-$75</span>
                    <div className="user-name">Sameen</div>
                </div> */}
            </div>


        )
    }
}