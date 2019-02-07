import React from 'react';
import CharacterPage from './characterPage';
import {shallow} from 'enzyme';

describe('Testing <CharacterPage/>', () => {
    const char = shallow(<CharacterPage/>);

    it('CharacterPage have rendered correctly', () => {
        expect(char).toMatchSnapshot();
    })

    it('CharacterPage state "error" is false', () => {
        expect(char.state().error).toBeFalsy();
    })

    it('Testing componentDidCatch', () => {
        char.instance().componentDidCatch();
        expect(char.state().error).toBeTruthy();
    })
})