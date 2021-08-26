import React from 'react';
import Display from '../component/Display';
import renderer from 'react-test-renderer';

describe('Display component', () => {
    it('matches the snapshot', () => {
      const display = renderer.create(<Display />).toJSON();
      expect(display).toMatchSnapshot();
    });
  });