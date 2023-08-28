import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar variant="dark" className="navbar-expand sticky-top" expand="lg" style={{ backgroundColor: '#ffa31c', minHeight: '100px'}}>
                <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ paddingLeft: '30px' }}>Expense Tracker</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="navbar-buttons ms-auto d-flex align-items-center" style={{float: 'right'}} >
                    <Nav.Link as={Link} to="/add_expense" className="navbar-buttons button add-expense-bg-color" style={{ marginRight: '10px'}}>+ ADD EXPENSE</Nav.Link>
                    {/* <Nav.Link as={Link} to="/add_user" className="button add-family-member-bg-color" style={{ marginRight: '10px'}}>+ ADD NEW FAMILY MEMBER</Nav.Link> */}
                    <NavDropdown title="SORT" id="sortDropdown" align="end" style={{ marginRight: '10px'}}>
                        <NavDropdown.Item as={Link} to="/?sort=date">By Date</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/?sort=amount">By Amount</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/?sort=alphabetical">Alphabetical</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </div>
            </Navbar>
        );
    }
}
