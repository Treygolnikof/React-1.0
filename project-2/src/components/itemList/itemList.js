import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import './itemList.css';

export default class ItemList extends Component {
    state = {
        itemList: null,
        loading: true,
        error: false,
        errorNumber: ''
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then(this.onItemLoaded)
            .catch((res) => {
                this.onError(res.message);
            }); 
    }

    onItemLoaded = (itemList) => {
        this.setState ({
            itemList, 
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            errorNumber: err,
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <ListGroupItem 
                    key = {id}
                    className = "item-list"
                    onClick = {() => this.props.onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList, loading, error, errorNumber} = this.state;

        if (!itemList || loading) {
            return (
                <div className = "bg-white">
                    <Spinner/>
                </div>
            )
        }

        if (error) {
            return (
                <div className = "bg-white">
                    <ErrorMessage errorNumber = {errorNumber}/>
                </div>
            )
        }

        const items = this.renderItems(itemList);

        return (
            <div className = "bg-white">
                <ListGroup className = "mb-5">
                    {items}
                </ListGroup>
            </div>
        );
    }
}