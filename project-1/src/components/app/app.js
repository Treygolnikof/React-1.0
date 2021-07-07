import React, {Component} from 'react';

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
            data: this.filterData([
                5,
                null,
                undefined,
                'Блабла',
                true,
                [],
                {label: "Going to learn React", important: true, like: false, id: this.idGenerator()},
                {label: "That is so good", important: false, like: false, id: this.idGenerator()},
                {label: "I need a break...", important: false, like: false, id: this.idGenerator()}
            ]),
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.filterData = this.filterData.bind(this);
        this.toggleLikeOrImportant = this.toggleLikeOrImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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

    toggleLikeOrImportant(id, item) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            let newItem = [];

            if (item === 'like') {
                newItem = {...old, like: !old.like};
            } else {
                newItem = {...old, important: !old.important};
            }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        
        const visiblePosts = this.filterPost(this.searchPost(data,term), filter);

        return (
            <div className = "app">
                <AppHeader
                    liked = {liked}
                    allPosts = {allPosts}/>
                <div className = "search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList 
                    posts = {visiblePosts}
                    onDelete = {this.deleteItem}
                    toggleImportant = {this.toggleLikeOrImportant}
                    toggleLiked = {this.toggleLikeOrImportant}/>
                <PostAddForm
                    onAdd = {this.addItem}/>
            </div>
        )
    }
}