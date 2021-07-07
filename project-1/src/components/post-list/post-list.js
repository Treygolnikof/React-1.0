import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDeleta, toggleLiked, toggleImportant}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <ListGroupItem key = {id} className = "list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete = {() => onDeleta(id)}
                    onToggleImportant = {() => toggleImportant(id, 'important')}
                    onToggleLiked = {() => toggleLiked(id, 'like')}
                />
            </ListGroupItem>
        )
    })

    return (
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;