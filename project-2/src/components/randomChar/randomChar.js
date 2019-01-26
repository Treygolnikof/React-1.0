import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class RandomChar extends Component {

    render() {

        return (
            <ListGroup className = "mb-5">
                <ListGroupItem className = "pt-3">
                    <h4 className = "text-center">Random Character: John</h4>
                </ListGroupItem>  
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Gender</span>
                    <span className = "float-right">male</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Born</span>
                    <span className = "float-right">11.03.1039</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Died</span>
                    <span className = "float-right">13.09.1089</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5 pb-4">
                    <span className = "font-weight-bold">Culture</span>
                    <span className = "float-right">Anarchy</span>
                </ListGroupItem>
            </ListGroup>
        );
    }
}
