import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

const Header = () => {
    return (
        <Navbar color="none" light expand="md">
            <NavbarBrand className="text-white font-weight-bold" href="#">Game of Thrones DB</NavbarBrand>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="text-white" href="#">Characters</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Houses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Books</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;