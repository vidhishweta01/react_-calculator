import React from 'react';
import Button from '../component/button';
import renderer from 'react-test-renderer';

describe('Button component', () => {
    it('matches the snapshot', () => {
      const handleClick = () => 'just for testing';
      const button = renderer.create(<Button handleClick={handleClick} label="1" />).toJSON();
      expect(button).toMatchSnapshot();
    });
  });