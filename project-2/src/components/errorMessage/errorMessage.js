import React from 'react';
import './errorMessage.css';
import error404 from './404.jpeg';
import error408 from './408.jpeg';
import error410 from './410.jpeg';
import error from './error.jpeg';


export default ({errorNumber}) => {
    const res = +errorNumber.toString().slice(-3);
    let img = '';
    switch (res) {
        case 404:
            img = error404;
            break;
        case 408:
            img = error408;
            break;
        case 410:
            img = error410;
            break;
        default:
            img = error;
    }

    return (
        <>
            <img src={img} alt = ''></img>
        </>
    )
}
