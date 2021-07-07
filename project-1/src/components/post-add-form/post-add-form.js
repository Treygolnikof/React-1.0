import React, {Component} from 'react';

import { Button, Input } from 'reactstrap';
import './post-add-form.css';

export default class PostAddForm extends Component {
        state = {
            text: '' 
        }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (event) => {
        if (this.state.text !== '')
        this.props.onAdd(this.state.text)
        event.preventDefault();
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form 
                className = "bottom-panel d-flex"
                onSubmit = {this.onSubmit}>
                <Input
                    type = "text"
                    placeholder = "О чём вы сейчас думаете?"
                    className = "form-control new-post-label"
                    onChange = {this.onValueChange}
                    value = {this.state.text}
                />
                <Button outline color = "secondary">
                    Добавить
                </Button>
            </form>
        )
    }
}