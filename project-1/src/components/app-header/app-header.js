import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    let post = allPosts.toString().slice(-1);
    if (post === '1' && allPosts !== 11) {
        post = 'запись';
    } else if ((post === '2' && allPosts !== 12) || (post === '3' && allPosts !== 13) || (post === '4' && allPosts !== 14)) {
        post = 'записи';
    } else {
        post = 'записей';
    }

    return (
        <div className = "app-header d-flex">
            <h1>Евгений Ветошкин</h1>
            <h2>{allPosts} {post}, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;