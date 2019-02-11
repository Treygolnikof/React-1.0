import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NavPanel from '../navPanel';
import ItemList from '../itemList';
import CoffeeService from '../../services/coffeeService';

import './coffeePage.css';
import Logo from './img/Logo.svg';
import BeansBlack from './img/Beans_logo_dark.svg';
import Cup from './img/coffee_cup.jpg';

export default class GoodsPage extends Component {
    coffeeService = new CoffeeService();
    render() {
        return (
            <>
                <div className="bannerfor">
                    <Container>
                        <Row>
                            <Col lg = '6'>
                                <NavPanel position = "header" color = "text-white" img = {Logo}/>
                            </Col>
                        </Row>
                        <h1 className="title-big">For your pleasure</h1>
                    </Container>
                </div>
                <section className="shop">
                    <Container>
                        <Row>
                            <Col lg = {{size: 4, offset: 2}}>
                                <img className="shop__girl" src={Cup} alt="girl"/>
                            </Col>
                            <Col lg = "4">
                                <div className="title">About our goods</div>
                                <img className="beanslogo" src={BeansBlack} alt="Beans logo"/>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                    so questions. <br/>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                    is song that held help face.
                                </div>
                            </Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col lg = {{size: 10, offset: 1}}>
                                <div className="best__wrapper">
                                    <ItemList getData = {this.coffeeService.getGoods}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}