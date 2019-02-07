import React from 'react';
import ItemDetails from './itemDetails';
import {shallow} from 'enzyme';

describe('Testing <ItemDetails/>', () => {
    const item = shallow(<ItemDetails/>);

    it('ItemDetails have rendered correctly', () => {
        expect(item).toMatchSnapshot();
    })

    it('ItemDetails state "error" is false', () => {
        expect(item.state().error).toBeFalsy();
    })

    it('ItemDetails state "loading" is true', () => {
        expect(item.state().loading).toBeTruthy();
    })

    it('ItemDetails state "item" is empty object', () => {
        expect(item.state().item).toBeNil();
    })
    
    it('Testing onItemLoaded', () => {
        item.instance().onItemLoaded();
        expect(item.state().loading).toBeFalsy();
    })

    it('Testing onError', () => {
        item.instance().onError();
        expect(item.state().error).toBeTruthy();
        expect(item.state().loading).toBeFalsy();
    })
})