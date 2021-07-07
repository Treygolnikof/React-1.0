import React, {Component} from 'react';
import styled from 'styled-components';

const AppTable = styled.table`
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
    float: left;
    margin-left: 50px;
    margin-top: 50px;
`
const AppImg = styled.img`
    width: 100%;
    height: 200px;
`

const AppTh = styled.th`
    background: #AFCDE7;
    color: white;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
`

const AppTd = styled.td`
    background: #D8E6F3;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    width: 200px;
    text-transform: uppercase;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [],
            vegetables: []
        };
    }

    componentWillMount() {
        fetch(process.env.PUBLIC_URL + '/db.json')
            .then(response => response.json())
            .then(data => this.setState({ 
                fruits: data.fruits,
                vegetables: data.vegetables 
            }))
    }

    idGenerator() {
        return Math.random().toString(36).substr(2, 12);
    }

    render() {
        const { fruits, vegetables } = this.state;
        console.log(this.state.fruits);

        return (
            <>
                <AppTable>
                    <thead>
                        <tr>
                            <AppTh>Название</AppTh>
                            <AppTh>Категория</AppTh>
                            <AppTh>Страна</AppTh>
                            <AppTh>Изображение</AppTh>
                        </tr>
                    </thead>
                    <tbody>
                        {fruits.map(fruits =>
                            <tr key = {this.idGenerator()}>
                                <AppTd>{fruits.name}</AppTd>
                                <AppTd>{fruits.fruit_category}</AppTd>
                                <AppTd>{fruits.country}</AppTd>
                                <AppTd><AppImg src={fruits.img_url} alt=""/></AppTd>
                            </tr>
                        )}
                    </tbody>   
                </AppTable>
                <AppTable>
                    <thead>
                        <tr>
                            <AppTh>Название</AppTh>
                            <AppTh>Категория</AppTh>
                            <AppTh>Страна</AppTh>
                            <AppTh>Изображение</AppTh>
                        </tr>
                    </thead>
                    <tbody>
                        {vegetables.map(vegetables =>
                            <tr key = {this.idGenerator()}>
                                <AppTd>{vegetables.name}</AppTd>
                                <AppTd>{vegetables.vegetable_category}</AppTd>
                                <AppTd>{vegetables.country}</AppTd>
                                <AppTd><AppImg src={vegetables.img_url} alt=""/></AppTd>
                            </tr>
                        )}
                    </tbody>    
                </AppTable>  
            </>
        );
    }
};
