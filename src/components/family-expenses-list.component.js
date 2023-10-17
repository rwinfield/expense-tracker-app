import React, { Component } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { dollarSign } from '../utils';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

class FamilyExpensesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            totalExpenses: 0
        };
    }
    
    fetchData() {
        const params = new URLSearchParams(document.location.search);
        let query = ''
        try {
            query = "?sort=" + params.get("sort").toLocaleString();
        }
        catch {
            query = '';
        }
        axios.get('http://localhost:5050/expenses/' + query)
            .then(response => {
                if (response.data.length > 0) {
                    let totalSum = 0;
                    response.data.forEach(expense => {
                        const expenseAmount = Number(expense.amount['$numberDecimal'].toLocaleString())
                        totalSum += expenseAmount;

                    this.setState({
                        expenses: response.data.map(expense => expense),
                        totalExpenses: totalSum
                        })
                    })
                            
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        const { location } = this.props.router;

        if (location.search !== prevProps.router.location.search) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
                <h3 className="titles">Total expenses: {dollarSign(this.state.totalExpenses.toFixed(2))}</h3>
                <div className="content">
                    {this.state.expenses.map((expense, i, array) => (
                        <Link as={Link} to={{pathname: `/expense/${expense._id}`}} style={{textDecoration: 'none'}}>
                        <div className="expense-tile" key={expense._id} style={{display:'flex'}}>
                            <div className="expense-details" >
                                <span className="category">{dollarSign(expense.amount['$numberDecimal'].toLocaleString())}</span>
                                <p>{expense.transaction}</p>
                            </div>
                            <span className="date">{new Date(expense.date).toLocaleDateString()}</span>
                            <span style={{ textAlign: 'right', fontSize: '14px', marginBottom:'-30px', color: 'gray'}}>
                                {i+1}/{array.length}
                            </span>
                            <div className="user-name">{expense.name}</div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>


        )
    }
}

export default withRouter(FamilyExpensesList)

