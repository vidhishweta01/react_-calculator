import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../component/navbar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Navbar /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });