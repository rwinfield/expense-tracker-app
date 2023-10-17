import React, { Component } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { dollarSign } from '../utils';
import DeleteConfirmation from './delete-confirm.component.js'

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

class UserExpensesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            totalExpenses: 0,
            name: '',
            member_id: window.location.href.split('/')[5],
            showConfirmation: false
        };
    }

    fetchData() {
        const id = window.location.href.split('/')[5];
        const params = new URLSearchParams(document.location.search);
        let query = ''
        try {
            query = "?sort=" + params.get("sort").toLocaleString();
        }
        catch {
            query = '';
        }
        axios.get(`http://localhost:5050/expenses/user/${id}` + query)
            .then(response => {
                axios.get(`http://localhost:5050/users`)
                    .then(usersResponse => {
                        for (let i = 0; i < usersResponse.data.length; i++) {
                            if (usersResponse.data[i]._id == id) {
                                this.setState({name: usersResponse.data[i].name || ''});
                                break;
                            }
                        }
                    })
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

    componentDidUpdate(prevProps, prevState) {
        const { location } = this.props.router;

        if (location.search !== prevProps.router.location.search) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
                <span style={{ float: 'right', paddingRight: '40px', paddingTop: '10px'}}>
                <Link className="delete-button" 
                onClick={() => {
                    this.setState({showConfirmation: true});
                }} 
                style={{textDecoration: 'none', marginRight:''}}
                >Delete User
                </Link>
                </span>
                {this.state.name && (
                    <h3 className="titles">{this.state.name}'s expenses: {dollarSign(this.state.totalExpenses.toFixed(2))}</h3>
                )}
                <div className="content">
                    {this.state.expenses.map((expense, i, array) => (
                        <Link as={Link} to={{pathname: `/expense/${expense._id}`}} style={{textDecoration: 'none'}}>
                        <div className="expense-tile" key={expense._id}>
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
                {this.state.showConfirmation && (
                <DeleteConfirmation
                to_delete={this.state.name}
                onDialog={(response) => {
                    if (response) {
                        this.setState({showConfirmation: false});
                        let handleDelete = async () => {
                            try {
                                await Promise.all([
                                    axios.delete(`http://localhost:5050/users/${this.state.member_id}`),
                                    axios.delete(`http://localhost:5050/expenses/delete-by-member/${this.state.member_id}`)
                                ]).then(() => {
                                    let { navigate } = this.props.router;
                                    navigate(-1);
                                });
                            } 
                            catch (error) {
                              console.error('Error deleting expense:', error);
                            }
                        };
                        handleDelete(this.state.member_id);
                    }
                    else {
                        this.setState({showConfirmation: false});
                    }
                }}
                />
                )}
            </div>


        )
    }
}

export default withRouter(UserExpensesList);

