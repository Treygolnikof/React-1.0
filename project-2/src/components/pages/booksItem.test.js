import React from 'react';
import BooksItem from './booksItem';
import {shallow} from 'enzyme';

describe('Testing <BooksItem/>', () => {
    const item = shallow(<BooksItem/>);

    it('BooksItem have rendered correctly', () => {
        expect(item).toMatchSnapshot();
    })
})