import React, {Component} from 'react';

import './post-list-item.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class PostListItem extends Component {

    state = {
        visibility: false,
        value: this.props.label,
        modal: false
    };


    onVisibility = ()  => {
        this.setState(({visibility}) => ({
            visibility: !visibility
        }))
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    render() {
        const {onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        const { visibility } = this.state;
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
                <span className = "app-list-item-label">
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
                        onClick = {onToggleImportant}>
                        <i className = "fa fa-star"></i>
                    </button>
                    <button
                        type = "button" 
                        className = "btn-heart btn-sm"
                        onClick = {onToggleLiked}>
                        <i className = "fa fa-heart"></i>
                    </button>
                    <button
                        type = "button" 
                        className = "btn-trash btn-sm"
                        onClick = {this.toggle}>
                        <i className = "fa fa-trash-o"></i>
                    </button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Удаление записи</ModalHeader>
                    <ModalBody>
                        Вы точно собираетесь удалить запись?
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="info" onClick = {onDelete}>Ок</Button>{' '}
                        <Button outline color="secondary" onClick = {this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}