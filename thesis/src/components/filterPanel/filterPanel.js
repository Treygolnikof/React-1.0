import React, {Component} from 'react';

import './filterPanel.css';

export default class FilterPanel extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ]
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {onFilterSelect} = this.props;
            return (
                <button 
                    key = {name} 
                    type = "button" 
                    className = "shop__filter-btn"
                    onClick = {() => onFilterSelect(name)}>
                        {label}
                </button>
            )
        })
        return (
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    {buttons}
                </div>
            </div>
        )
    }
}