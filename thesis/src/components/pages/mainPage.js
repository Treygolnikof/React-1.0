import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NavPanel from '../navPanel';
import {Link} from 'react-router-dom';
import ItemList from '../itemList';
import CoffeeService from '../../services/coffeeService';

import './mainPage.css';
import Logo from './img/Logo.svg';
import Beans from './img/Beans_logo.svg';
import BeansBlack from './img/Beans_logo_dark.svg';

export default class MainPage extends Component {
    coffeeService = new CoffeeService();
    render() {
        return (
            <>
                <div className = "preview">
                    <Container>
                        <Row>
                            <Col lg = '6'>
                                <NavPanel position = "header" color = "text-white" img = {Logo}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg = {{size: 10, offset: 1}}>
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src={Beans} alt="Beans logo"/>
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link className="preview__btn text-decoration-none" to = "/coffee/">More</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="about">
                    <Container>
                        <Row>
                            <Col lg = {{size: 6, offset: 3}}>
                                <div className="title">About Us</div>
                                <img className="beanslogo" src={BeansBlack} alt="Beans logo"/>
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.<br/><br/>

                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="best">
                    <Container>
                        <div className="title">Our best</div>
                        <Row>
                            <Col lg = {{size: 10, offset: 1}}>
                                <div className="best__wrapper">
                                    <ItemList 
                                        // onItemSelected = {(name) => {
                                        //     this.props.history.push('/coffee', name)
                                        // }}
                                        getData = {this.coffeeService.getBestSellers}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}