import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <ItemDetails 
                itemId = {this.props.bookId}
                getData = {this.gotService.getBook}
                getLabel = "Please, select a book from the list.">
                <Field field = 'numberOfPages' label = 'Number Of Pages'/>
                <Field field = 'publiser' label = 'Publiser'/>
                <Field field = 'released' label = 'Released'/>
            </ItemDetails>
        )
    }
}