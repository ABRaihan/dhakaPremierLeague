import React from 'react';
import logo from '../../images/logo.jpg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    const imgStyle = {
        width: '250px',
        objectFit: 'cover',
        borderRadius: '50%'
    }
    return (
        <Container className='text-center'>
            <img style={imgStyle} src={logo} alt="Logo" />
            <Navbar bg='dark' variant='dark' className='mt-5'>
                <LinkContainer exact to='/'><Navbar.Brand> <h1 className='font-weight-bold text-danger'>DPL</h1> </Navbar.Brand></LinkContainer>
                <Nav className='m-auto'>
                    <LinkContainer exact to='/'><Nav.Link>All Players</Nav.Link></LinkContainer>
                    <LinkContainer exact to='/teamPlayers'><Nav.Link>Your Team Players</Nav.Link></LinkContainer>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;