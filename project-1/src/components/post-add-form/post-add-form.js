import React from 'react';

import { Button, Input } from 'reactstrap';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className = "bottom-panel d-flex">
            <Input
                type = "text"
                placeholder = "О чём вы сейчас думаете?"
                className = "form-control new-post-label"
            />
            <Button
                outline color = "secondary"
                onClick = {() => onAdd('Hello')}>
                Добавить
            </Button>
        </div>
    )
}

export default PostAddForm;