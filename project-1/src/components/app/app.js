import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                5,
                null,
                undefined,
                true,
                'Блабла',
                [],
                {label: "Going to learn React", important: true, id: idGenerator()},
                {label: "That is so good", important: false, id: idGenerator()},
                {label: "I need a break...", important: false, id: idGenerator()}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.state.data = this.state.data.filter((item) => {
            return typeof(item) == 'object' && item != null && Array.isArray(item) === false;   
        })

        this.htmlId = idGenerator();
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className = "app">
                <AppHeader/>
                <div className = "search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDelete = {this.deleteItem}/>
                <PostAddForm
                    onAdd = {this.addItem}/>
            </div>
        )
    }
}