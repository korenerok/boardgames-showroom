import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

const navbarStyles={
    backgroundColor:'light',
}

const Header = ({title}) => {
    return (
        <Container>
            <Navbar style={navbarStyles} variant='light'>
                <Navbar.Brand href='/'>{title}</Navbar.Brand>
            </Navbar>
        </Container>
    )
};

export default Header;