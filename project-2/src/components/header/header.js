import React from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar color="none" light expand="md">
            <Link to = "/" className="text-white font-weight-bold">
                Game of Thrones DB
            </Link>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className="text-white" to="/characters/">Characters</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-white px-3" to="/houses/">Houses</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-white" to="/books/">Books</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;