import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CharDetails extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem className = "pt-3">
                    <h4 className = "text-center">John Snow</h4>
                </ListGroupItem>  
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Gender</span>
                    <span className = "float-right">male</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Born</span>
                    <span className = "float-right">1783</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5">
                    <span className = "font-weight-bold">Died</span>
                    <span className = "float-right">1820</span>
                </ListGroupItem>
                <ListGroupItem className = "px-5 pb-4">
                    <span className = "font-weight-bold">Culture</span>
                    <span className = "float-right">First</span>
                </ListGroupItem>
            </ListGroup>
        );
    }
}