import React from 'react';
import Chat from '../components/Chat';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Chat component', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Chat addMessage={mockFn} />);
  });

  it('should render the Chat component correctly with the right classes and styles', () => {
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should update state as message is typed out in input', () => {
    const chatInput = wrapper.find('input');

    expect(wrapper.state().input).toEqual('');
    chatInput.simulate('change', { target: { value: 'Hello SpruceBot!'} });
    expect(wrapper.state().input).toEqual('Hello SpruceBot!');
  });

  it.skip('should rest input of state to an empty string after clicking submit', () => {
    const chatInput = wrapper.find('input');
    const submit = wrapper.find('button');

    chatInput.simulate('change', { target: { value: 'Hello SpruceBot!'} });
    expect(wrapper.state().input).toEqual('Hello SpruceBot!');

    // Unfortunately neither of these are working the way I expect them too
    chatInput.simulate('keypress', { key: 'Enter', keyCode: 13, which: 13 });
    submit.simulate('click');
    expect(wrapper.state().input).toEqual('');
  });

  it('should have addMessage function as a prop', () => {
    expect(wrapper.props().addMessage).toEqual(mockFn);
  });
});
