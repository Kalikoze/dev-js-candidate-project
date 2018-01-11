import React from 'react';
import Message from '../components/Message';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Message component', () => {
  it('should render the Message correctly with the right classes and styles', () => {
    const tree = renderer.create(<Message isUser={false} text='Hello SpruceBot!' />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have isUser and text as props', () => {
    const wrapper = mount(<Message isUser={true} text='Hello SpruceBot!' />);

    expect(wrapper.props()).toHaveProperty('isUser', true);
    expect(wrapper.props()).toHaveProperty('text', 'Hello SpruceBot!');
  });
});
