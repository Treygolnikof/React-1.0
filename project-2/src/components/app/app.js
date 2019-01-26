import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';

const App = () => {
    const got = new GotService();

    got.getAllCharacters()
        .then(res => {
            console.log(res.forEach( item => console.log(item.name)));
        });

    got.getCharacter(100)
        .then(res => console.log(res));

    got.getAllHouses()
    .then(res => {
        console.log(res.forEach( item => console.log(item.name)));
    });

    got.getHouse(5)
        .then(res => console.log(res));

    got.getAllBooks()
    .then(res => {
        console.log(res.forEach( item => console.log(item.name)));
    });

    got.getBook(3)
        .then(res => console.log(res));

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
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
};

export default App;