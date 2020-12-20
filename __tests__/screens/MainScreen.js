import MainScreen from '../../screens/MainScreen'
import React from 'react';
import renderer from 'react-test-renderer';


describe('Main screen', () => {
    it(' takes snapshot', () => {
        const tree = renderer.create(<MainScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
      });    
});
