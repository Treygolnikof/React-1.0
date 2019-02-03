import React, {Component} from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomItem extends Component {

    gotService = new GotService();
    state = {
        showRandomChar: true,
        item: {},
        loading: true,
        error: false,
        errorNumber: ''
    }

    componentDidMount() {
        this.updateItem();
        this.timerId = setInterval(this.updateItem, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onItemLoaded = (item) => {
        this.setState ({
            item, 
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

    updateItem = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onItemLoaded)
            .catch((res) => {
                this.onError(res.message);
            });
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const {item, loading, error, errorNumber, showRandomChar} = this.state;

        const errorMessage = error ? <ErrorMessage errorNumber = {errorNumber}/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = (!(loading || error) && showRandomChar) ? <View item = {item}/> : null;

        return (
            <Row>
                <Col lg={{size: 6, offset: 0}}>
                    <div className = "bg-white">
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                    <Button 
                            color="secondary" 
                            className = "mb-5" 
                            block
                            onClick = {this.toggleRandomChar}>
                            Скрыть
                    </Button>
                </Col>
            </Row>
        );
    }
}

const View = ({item}) => {
    const {name, gender, born, died, culture} = item;
    return (
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
    )
}
