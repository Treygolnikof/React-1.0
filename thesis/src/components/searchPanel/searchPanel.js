import React, {Component} from 'react';

import './searchPanel.css';

export default class searchPanel extends Component {
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        let term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <form action="#" className="shop__search">
                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                <input 
                    id="filter" 
                    type="text" 
                    placeholder="start typing here..." 
                    className="shop__search-input" 
                    onChange = {this.onUpdateSearch}
                />
            </form>
        )
    }
}