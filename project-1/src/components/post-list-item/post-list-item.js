import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className = "app-list-item d-flex justify-content-between">
            <span className = "app-list-item-label">
                Hello world;
            </span>
            <div className="d-flex justify-content-center align-item-center">
                <button
                    type = "button" 
                    className = "btn-star btn-sm">
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
        </li>
    )
}

export default PostListItem;