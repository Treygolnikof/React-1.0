import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class HousePage extends Component {
    gotService = new GotService();

    state = {
        selectedHouse: '',
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected = {this.onItemSelected}
                getData = {this.gotService.getAllHouses}
                renderItem = {({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId = {this.state.selectedHouse}
                getData = {this.gotService.getHouse}
                getLabel = "Please, select a house from the list.">
                <Field field = 'region' label = 'Region'/>
                <Field field = 'words' label = 'Words'/>
                <Field field = 'titles' label = 'Titles'/>
                <Field field = 'overlord' label = 'Overlord'/>
                <Field field = 'ancestralWeapons' label = 'Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left = {itemList} right = {itemDetails}/>
        )
    }
}