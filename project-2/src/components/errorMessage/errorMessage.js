import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt = ''></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage