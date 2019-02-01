import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';

export default class App extends Component {
    gotService = new GotService();
    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            {char}
                            <Button 
                                color="secondary" 
                                className = "mb-5" 
                                block
                                onClick = {this.toggleRandomChar}>
                                Скрыть
                            </Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllBooks}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllHouses}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};