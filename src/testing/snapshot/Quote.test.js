import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../../component/Quote';
import renderer from 'react-test-renderer';

describe('Quote component', () => {
    it('matches the snapshot', () => {
      const quote = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
      expect(quote).toMatchSnapshot();
    });
  });