import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class BookPage extends Component {
    gotService = new GotService();

    state = {
        selectedBook: '',
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
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
                getData = {this.gotService.getAllBooks}
                renderItem = {({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId = {this.state.selectedBook}
                getData = {this.gotService.getBook}
                getLabel = "Please, select a book from the list.">
                <Field field = 'numberOfPages' label = 'Number Of Pages'/>
                <Field field = 'publiser' label = 'Publiser'/>
                <Field field = 'released' label = 'Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left = {itemList} right = {itemDetails}/>
        )
    }
}