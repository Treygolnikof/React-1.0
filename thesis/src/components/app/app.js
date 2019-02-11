import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavPanel from '../navPanel';
import {MainPage, CoffeePage, GoodsPage} from '../pages';

import '../../index.css';
import LogoBlack from './Logo_black.svg';
import BeansBlack from '../pages/img/Beans_logo_dark.svg';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className = "app">
                    <Switch>
                        <Route path = '/' exact component = {MainPage}/>
                        <Route path = '/coffee' component = {CoffeePage}/>
                        <Route path = '/goods' component = {GoodsPage}/>
                        {/* <Route path = '/contacts' component = {ContactPage}/>
                        <Route component = {ErrorPage}/> */}
                    </Switch>
                    <Container>
                        <Row>
                            <Col lg = {{size: 6, offset: 3}}>
                                <NavPanel position = "footer" color = "text-dark" img = {LogoBlack}/>
                            </Col>
                        </Row>
                        <img className="beanslogo" src={BeansBlack} alt="Beans logo"/>
                    </Container>
                </div>
            </Router>
        );
    }
} 