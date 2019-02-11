import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NavPanel from '../navPanel';

import './coffeePage.css';
import Logo from './img/Logo.svg';
import BeansBlack from './img/Beans_logo_dark.svg';
import Item from './img/coffee_item.jpg';

export default class CoffeeItems extends Component {
    render() {
        return (
            <>
                <div className="banner">
                    <Container>
                        <Row>
                            <Col lg = '6'>
                                <NavPanel position = "header" color = "text-white" img = {Logo}/>
                            </Col>
                        </Row>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </div>
                <section className="shop">
                    <Container>
                        <Row>
                            <Col lg = {{size: 5, offset: 1}}>
                                <img className="shop__girl" src={Item} alt="girl"/>
                            </Col>
                            <Col lg = "4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={BeansBlack} alt="Beans logo"/>
                                <div class="shop__point">
                                    <span>Country:</span>
                                    Brazil
                                </div>
                                <div class="shop__point">
                                    <span>Description:</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div class="shop__point">
                                    <span>Price:</span>
                                    <span class="shop__point-price">16.99$</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}