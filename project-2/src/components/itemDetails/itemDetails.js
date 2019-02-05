import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import {ErrorPage} from '../pages';

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className = "px-5">
            <span className = "font-weight-bold">{label}</span>
            <span className = "float-right">{item[field]}</span>
        </ListGroupItem>
    )
}

export {Field};

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState ({
                loading: true
            })
            this.updateItem();
        }
    }
    onItemLoaded = (item) => {
        this.setState ({
            item, 
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItem() {
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }
        const {getData} = this.props;

        getData(itemId)
            .then(this.onItemLoaded)
            .catch((res) => {
                this.onError(res.message);
            });
    }

    render() {
        const {loading, item, error} = this.state;

        const {getLabel} = this.props;

        if (error) {
            return (
                <ErrorPage/>
            )
        }

        if (!item) {
            return (
                <div className = "bg-white p-5">
                    <h4 className = "text-center">{getLabel}</h4>
                </div>
            )
        }

        if (loading) {
            return (
                <div className = "bg-white">
                    <Spinner/>
                </div>
            )
        } 

        const {name} = item;

        return (
            <div className = "bg-white pb-3">
                <ListGroup>
                    <ListGroupItem className = "pt-3">
                        <h4 className = "text-center">{name}</h4>
                    </ListGroupItem>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </div>
        );
    }
}
