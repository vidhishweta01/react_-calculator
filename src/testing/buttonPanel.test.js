import React from 'react';
import ButtonPanel from '../component/buttonPanel';
import renderer from 'react-test-renderer';

describe('ButtonPanel component', () => {
    it('matches the snapshot', () => {
      const handleClick = () => 'just for testing';
      const panel = renderer.create(<ButtonPanel clickHandler={handleClick} />).toJSON();
      expect(panel).toMatchSnapshot();
    });
  });