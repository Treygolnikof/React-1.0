import React, {Component} from 'react';
// import idGenerator from 'react-id-generator';

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
            data : this.filterData([
                5,
                null,
                undefined,
                'Блабла',
                true,
                [],
                {label: "Going to learn React", important: true, id: this.idGenerator()},
                {label: "That is so good", important: false, id: this.idGenerator()},
                {label: "I need a break...", important: false, id: this.idGenerator()}
            ]),
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.filterData = this.filterData.bind(this);
        // this.htmlId = idGenerator();
    }

    idGenerator() {
        return Math.random().toString(36).substr(2, 12);
    }

    filterData(data) {
        const dataIn = data.filter((item) => {
            return typeof(item) == 'object' && item != null && Array.isArray(item) === false;   
        })
        return dataIn;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log('Ok');
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
            id: this.idGenerator()
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