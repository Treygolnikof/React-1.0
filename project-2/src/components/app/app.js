import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            visibility: true
        }
        this.onVisibility = this.onVisibility.bind(this);
    }
    onVisibility() {
        this.setState(({visibility}) => ({
            visibility: !visibility
        }))
    }
    render() {
        const {visibility} = this.state;

        const randomChar = visibility ? <RandomChar/> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <Button 
                                color="secondary" 
                                className = "mb-5" 
                                block
                                onClick = {this.onVisibility}>
                                Скрыть
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};