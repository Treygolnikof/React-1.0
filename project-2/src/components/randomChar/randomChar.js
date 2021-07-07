import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new GotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char = {char}/> : null;

        return (
            <div className = "bg-white">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <ListGroup>
                <ListGroupItem className = "pt-3">
                    <h4 className = "text-center">Random Character: {name}</h4>
                </ListGroupItem>  
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Gender</span>
                    <span className = "float-right">{gender}</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Born</span>
                    <span className = "float-right">{born}</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Died</span>
                    <span className = "float-right">{died}</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5 pb-4">
                    <span className = "font-weight-bold">Culture</span>
                    <span className = "float-right">{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
