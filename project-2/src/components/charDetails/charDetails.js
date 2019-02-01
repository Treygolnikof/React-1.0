import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        error: false,
        loading: true,
        errorNumber: ''
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.setState ({
                loading: true
            })
            this.updateChar();
        }
    }
    onCharLoaded = (char) => {
        this.setState ({
            char, 
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

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch((res) => {
                this.onError(res.message);
            });
    }

    render() {
        const {loading, char, error, errorNumber} = this.state;

        const errorMessage = error ? <ErrorMessage errorNumber = {errorNumber}/> : null;
        const content = !(loading || error) ? <View char = {char}/> : null;
        const spinner = loading ? <Spinner/> : null;

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
                    <h4 className = "text-center">{name}</h4>
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
