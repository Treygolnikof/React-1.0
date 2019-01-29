import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup className = "mb-5">
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}