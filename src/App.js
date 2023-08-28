
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import CustomNavbar from "./components/navbar.component.js";
import Sidebar from "./components/sidebar.component.js";
import FamilyExpensesList from "./components/family-expenses-list.component.js";
import UserExpensesList from "./components/user-expenses-list.component.js";
import EditExpense from "./components/edit-expense.component.js";
import AddExpense from "./components/add-expense.component.js";
import AddUser from "./components/add-user.component.js";

// function TransactionEntry({ transaction, description, price, date }) {
//   // Determine the CSS class for the price color based on whether it's positive or negative
//   const priceColorClass = price.startsWith('-') ? 'red' : 'green';

//   return (
//     <div className="transaction">
//       {/* Transaction */}
//       <div className="box">
//         <div className="content">{transaction}</div>
//       </div>

//       {/* Description */}
//       <div className="box">
//         <div className="content">{description}</div>
//       </div>

//       {/* Price */}
//       <div className={`box price ${priceColorClass}`}>
//         <div className="content">{price}</div>
//       </div>

//       {/* Date */}
//       <div className="box">
//         <div className="content dateTime">{date}</div>
//       </div>
//     </div>
//   );
// }

function App() {
    return (
        <BrowserRouter>
            <CustomNavbar />
            <Sidebar />
            <div>
                <Routes>
                <Route path="/" element={<FamilyExpensesList />} />
                <Route path="/user/:id" element={<UserExpensesList />} />
                <Route path="/edit/:id" element={<EditExpense />} />
                <Route path="/add_expense" element={<AddExpense />} />
                <Route path="/add_user" element={<AddUser />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
//   return (
//     <main>
//       <h1>$400.00</h1>
//       <form> 
//         <div className="basic">
//           <input type="text" placeholder="Enter Transaction" />
//           <input type="text" placeholder="Enter Price" />
//           <input type="text" placeholder="Enter Description" />
//           <input type="datetime-local" />
//         </div>
//         <button type="submit">Add new Transaction</button>
//       </form>
//       <hr /> 
//       <div className="transactions">
//         <TransactionEntry
//           transaction="Samsung TV"
//           description="For bday"
//           price="-$500"
//           date="2003-12-22 9:00"
//         />
//         <TransactionEntry
//           transaction="New Job Paycheck"
//           description="Web developer job"
//           price="+$1000"
//           date="2003-12-23 9:30"
//         />
//         <TransactionEntry
//           transaction="New Iphone"
//           description="For upgrade"
//           price="-$800"
//           date="2003-12-22 9:50"
//         />
//         {/* ... More transaction entries ... */}
//       </div>
//     </main>
//   )


export default App;