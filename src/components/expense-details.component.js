import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { dollarSign } from '../utils';
import BackButton from './back-button.component.js';
import DeleteConfirmation from './delete-confirm.component.js'

const ExpenseDetails = () => {
    const { id } = useParams();
    let [expense, setExpense] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const fetch_expense = async () => {
            const response = await axios.get(`http://localhost:5050/expenses/${id}`);
            setExpense(response.data);
            }
        fetch_expense();
        })

    if (!expense) {
        return;
    }
    
    let confirmResponse = (response) => {
        if (response) {
            setShowConfirmation(false);
            handleDelete(id);
        }
        else {
            setShowConfirmation(false);
        }
    }
    
    const showConfirm = () => {
        setShowConfirmation(true);
    };

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:5050/expenses/${id}`).then(navigate(-1));
        } 
        catch (error) {
          console.error('Error deleting expense:', error);
        }
    };

    return (
        <div>
            <span style={{ float: 'right', paddingRight: '40px', paddingTop: '10px'}}><BackButton></BackButton></span>
            <h3 className="titles" style={{display: 'flex'}}>{expense.transaction}</h3>
            <h5 className="titles expense-color">{dollarSign(expense.amount['$numberDecimal'].toLocaleString())}</h5>
            <h5 className="titles">{expense.name}</h5>
            <h6 className="titles" style={{maxWidth: '400px'}}><i>{expense.description}</i></h6>
            <h6 className="titles" style={{ marginBottom: '50px'}}>{new Date(expense.date).toLocaleDateString()}</h6>
            <span style={{ marginTop: '50px'}}>
                <Link to={{pathname: `/expense/edit/${expense._id}`}} className="edit-button" style={{textDecoration: 'none', marginRight:'-200px'}}>Edit</Link>
                <Link className="delete-button" onClick={() => showConfirm()} style={{textDecoration: 'none', marginRight:'-200px'}}>Delete</Link>      
            </span>
            {showConfirmation && (
            <DeleteConfirmation
              to_delete={expense.transaction}
              onDialog={confirmResponse}
            />
            )}
        </div>
    )
}

export default ExpenseDetails;