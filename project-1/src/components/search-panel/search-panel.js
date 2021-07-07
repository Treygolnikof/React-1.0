import React, {Component} from 'react';

import { Input } from 'reactstrap';
import './search-panel.css';

export default class SearchPanel extends Component {
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
            <Input
                className = "form-control search-input"
                type = "text"
                placeholder = "Поиск по записям"
                onChange = {this.onUpdateSearch}
            />
        )
    }
}
