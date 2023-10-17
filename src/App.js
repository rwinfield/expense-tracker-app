
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import CustomNavbar from "./components/navbar.component.js";
import Sidebar from "./components/sidebar.component.js";
import FamilyExpensesList from "./components/family-expenses-list.component.js";
import UserExpensesList from "./components/user-expenses-list.component.js";
import ExpenseDetails from "./components/expense-details.component.js";
import EditExpense from "./components/edit-expense.component.js";
import AddExpense from "./components/add-expense.component.js";
import AddFamilyMember from "./components/add-family-member.component.js";

function App() {
    return (
        <BrowserRouter>
            <CustomNavbar />
            <Sidebar />
            <div>
                <Routes>
                <Route path="/" element={<FamilyExpensesList />} />
                <Route path="/expenses/user/:id" element={<UserExpensesList />} />
                <Route path="/expense/:id" element={<ExpenseDetails />} />
                <Route path="/expense/edit/:id" element={<EditExpense />} />
                <Route path="/add_expense" element={<AddExpense />} />
                <Route path="/add_family_member" element={<AddFamilyMember />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;