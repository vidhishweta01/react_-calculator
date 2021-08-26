import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../../component/Quote';

describe('Quote component', () => {
  it('matches the snapshot', () => {
    const quote = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
