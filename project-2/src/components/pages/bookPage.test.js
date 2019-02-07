import React from 'react';
import {BookPage} from './bookPage';
import {shallow} from 'enzyme';

describe('Testing <BookPage/>', () => {
    const book = shallow(<BookPage/>);

    it('BookPage have rendered correctly', () => {
        expect(book).toMatchSnapshot();
    })

    it('BookPage state "error" is false', () => {
        expect(book.state().error).toBeFalsy();
    })

    it('Testing componentDidCatch', () => {
        book.instance().componentDidCatch();
        expect(book.state().error).toBeTruthy();
    })
})