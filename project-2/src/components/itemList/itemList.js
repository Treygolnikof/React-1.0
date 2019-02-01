import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService'
import Spinner from '../spinner';
import './itemList.css';
import ErrorMessage from '../errorMessage';

export default class ItemList extends Component {
    gotService = new GotService();

    state = {
        charList: null,
        loading: true,
        error: false,
        errorNumber: ''
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(this.onCharLoaded)
            .catch((res) => {
                this.onError(res.message);
            }); 
    }

    onCharLoaded = (charList) => {
        this.setState ({
            charList, 
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
            return (
                <ListGroupItem 
                    key = {item.id}
                    className = "item-list"
                    onClick = {() => this.props.onCharSelected(item.id)}>
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList, loading, error, errorNumber} = this.state;

        if (!charList || loading) {
            return (
                <div className = "bg-white">
                    <Spinner/>
                </div>
            )
        }

        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage errorNumber = {errorNumber}/> : null;
        const content = !(loading || error) ? <View items = {items}/> : null;

        return (
            <div className = "bg-white">
                {errorMessage}
                {content}
            </div>
        );
    }
}

const View = ({items}) => {
    return (
        <>
            <ListGroup className = "mb-5">
                {items}
            </ListGroup>
        </>
    )
}