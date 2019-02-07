import React from 'react';
import '../errorMessage/errorMessage.css';
import error404 from '../errorMessage/404.jpeg';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <img src={error404} alt = ''></img>
            <Link className="text-white text-decoration-none" to="/">
                <Button
                    color="secondary" 
                    block>
                    To main
                </Button>
            </Link>
        </>
    )
} 

export default ErrorPage;