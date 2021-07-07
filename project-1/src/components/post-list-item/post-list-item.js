import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        const {important, label} = this.props;
        this.state = {
            important: important,
            like: false,
            visibility: false,
            value: label
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onVisibility = this.onVisibility.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    onVisibility() {
        this.setState(({visibility}) => ({
            visibility: !visibility
        }))
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {important, like, visibility} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        if (visibility) {
            classNames += ' visibility';
        }

        return (
            <div className = {classNames}>
                <span 
                    className = "app-list-item-label"
                    onClick = {this.onLike}>
                    {this.state.value}
                </span>
                <form 
                    className = "edit-label" 
                    onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"
                        name = "value"
                        placeholder = "Введите текст"
                        value = {this.state.value} 
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "submit" 
                        className = "btn-accept btn-sm"
                        value = "Ок"
                        onClick = {this.onVisibility}
                    />
                </form>
                <div className="d-flex justify-content-center align-item-center">
                    <button
                        type = "button" 
                        className = "btn-edit btn-sm"
                        onClick = {this.onVisibility}>
                        Edit
                    </button>
                    <button
                        type = "button" 
                        className = "btn-star btn-sm"
                        onClick = {this.onImportant}>
                        <i className = "fa fa-star"></i>
                    </button>
                    <button
                        type = "button" 
                        className = "btn-heart btn-sm">
                        <i className = "fa fa-heart"></i>
                    </button>
                    <button
                        type = "button" 
                        className = "btn-trash btn-sm">
                        <i className = "fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}