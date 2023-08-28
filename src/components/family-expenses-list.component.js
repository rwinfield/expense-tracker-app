import React, { Component } from 'react';

export default class FamilyExpensesList extends Component {
    render() {
        return (
            // <div style={{ whiteSpace: "pre"}} className="content">
            //     <p style={{ whiteSpace: "pre"}}>You are on the family-expenses-list-component!
            //     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>e<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>e<br></br><br></br><br></br>v
            //     hello
            //     <br></br><br></br><br></br><br></br><br></br>e<br></br><br></br>a<br></br>g<br></br><br></br>f<br></br><br></br><br></br>e<br></br>hello again
            //     </p>
            // </div>
            <div className="content">
                <div className="expense-tile">
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
                </div>
            </div>


        )
    }
}