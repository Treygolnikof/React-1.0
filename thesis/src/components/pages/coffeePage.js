import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NavPanel from '../navPanel';
import ItemList from '../itemList';
import CoffeeService from '../../services/coffeeService';
import SearchPanel from '../searchPanel';
import FilterPanel from '../filterPanel';

import './coffeePage.css';
import Logo from './img/Logo.svg';
import BeansBlack from './img/Beans_logo_dark.svg';
import Girl from './img/coffee_girl.jpg';

export default class CoffeePage extends Component {
    coffeeService = new CoffeeService();

    state = {
        term: '',
        filter: ''
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

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
                            <Col lg = {{size: 4, offset: 2}}>
                                <img className="shop__girl" src={Girl} alt="girl"/>
                            </Col>
                            <Col lg = "4">
                                <div className="title">About our beans</div>
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
                            <Col lg = {{size: 5, offset: 1}}>
                                <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                            </Col>
                            <Col lg = "5">
                                <FilterPanel onFilterSelect = {this.onFilterSelect}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg = {{size: 10, offset: 1}}>
                                <div className="shop__wrapper">
                                    <ItemList 
                                        getData = {this.coffeeService.getCoffee}
                                        term = {this.state.term}
                                        filter = {this.state.filter}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}