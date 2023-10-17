import React from 'react';
import { Link, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const sortBy = searchParams.get('sort') || 'date';

    const navigateToSortOption = (sortOption) => {
        searchParams.set('sort', sortOption);

        navigate({
            pathname: location.pathname,
            search: createSearchParams({sort: sortOption}).toString(),
        });
    };

    
    return (
        <Navbar variant="dark" className="navbar-expand sticky-top" expand="lg" style={{ backgroundColor: '#ffa31c', minHeight: '100px' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ paddingLeft: '30px'}}><h2><b>Expense Tracker</b></h2></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="navbar-buttons ms-auto d-flex align-items-center" style={{ float: 'right' }} >
                    <Nav.Link as={Link} to="/add_expense" className="navbar-buttons button add-expense-bg-color" style={{ marginRight: '10px' }}>+ ADD EXPENSE</Nav.Link>
                    <NavDropdown title="SORT" id="sortDropdown" align="end" style={{ marginRight: '10px' }}>
                        <NavDropdown.Item onClick={() => navigateToSortOption('date')} active={sortBy === 'date'} >By Date</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateToSortOption('amount')} active={sortBy === 'amount'} >By Amount</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateToSortOption('alphabetical')} active={sortBy === 'alphabetical'} >Alphabetical</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;
