import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

const navbarStyles={
    backgroundColor:'lightgreen',
}

const Header = ({title}) => {
    return (
        <Navbar style={navbarStyles} variant='light'>
            <Container>
                <Navbar.Brand href='/'>{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;