import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    let data = [
        5,
        null,
        undefined,
        'Блабла',
        {label: "Going to learn React", important: true, id: "qwefsda"},
        {label: "That is so good", important: false, id: "sdfaef"},
        {label: "I need a break...", important: false, id: "dfgzaf"}
    ]

    data = data.filter((item) => {
        return typeof(item) == 'object' && item != null;   
    })

    return (
        <div className = "app">
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;