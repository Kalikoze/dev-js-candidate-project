import React from 'react';
import Message from '../components/Message';
import renderer from 'react-test-renderer';

describe('Message component', () => {
  it('should render the Message correctly with the right classes and styles', () => {
    const tree = renderer.create(<Message isUser={false} text='Hello SpruceBot!' />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
