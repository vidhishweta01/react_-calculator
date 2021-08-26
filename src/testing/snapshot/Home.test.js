import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../component/Home';

describe('Home component', () => {
  it('matches the snapshot', () => {
    const home = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(home).toMatchSnapshot();
  });
});
