import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rst, dld}) => {
    
    function uploadCounter() {
        const myData = {
            count: counter
        };
        
        fetch('http://localhost:3001/numbers', {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }
    
    return (
        <div className = "jumbatron">
            <div className = "center-block">
                <div className = "counter-block">
                    <div><p className = "counter">{counter}</p></div>
                </div>
                <div onClick = {inc} className = "plus"><div className = "plus-img"></div></div>
                <div onClick = {dec} className = "minus"><div className = "minus-img"></div></div>
                <div onClick = {rst} className = "reset"><div className = "reset-img"></div></div>
                <div onClick = {dld} className = "download"></div>
                <div onClick = {uploadCounter} className = "upload"></div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rst, dld} = bindActionCreators(actions, dispatch)
    return {
        inc,
        dec,
        rst,
        dld: () => {
            fetch(process.env.PUBLIC_URL + '/db.json')
            .then(response => response.json())
            .then(data => {
                const randomNum = Math.floor(Math.random() * data.numbers.length);
                const value = data.numbers[randomNum].const;
                dld(value);
            })
            .catch(err => console.log(err));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);