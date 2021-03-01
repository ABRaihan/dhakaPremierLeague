import React from 'react';
import logo from '../../images/logo.jpg';

const Header = () => {
    const imgStyle = {
        width: '250px',
        objectFit: 'cover',
        borderRadius: '50%'
    }
    return (
        <div className="text-center">
            <img style={imgStyle} src={logo} alt="Logo" />
            <h1 style={{fontWeight: 'bold'}}>DPL Premium Players</h1>
        </div>
    );
};

export default Header;