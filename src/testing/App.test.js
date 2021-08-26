import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../component/App/App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><App /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });