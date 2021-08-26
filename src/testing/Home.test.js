import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../component/Home';
import renderer from 'react-test-renderer';

describe('Home component', () => {
    it('matches the snapshot', () => {
      const home = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
      expect(home).toMatchSnapshot();
    });
  });