import React from 'react';
import Chat from '../components/Chat';
import ChatContainer from '../containers/ChatContainer';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({watsonResponse: {}});

configure({ adapter: new Adapter() });
const setUp = () => {
  const props = { postMessage: jest.fn() };
  const wrapper = mount(
    <Provider store={fakeStore}>
      <ChatContainer {...props} addMessage={jest.fn()} />
    </Provider>
  );

  const chatComponent = wrapper.find(Chat);

  return { props, chatComponent };

};

describe('Chat component', () => {
  it('should render the Chat component correctly with the right classes and styles', () => {
    const { chatComponent } = setUp();
    const tree = renderer.create(chatComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    const { chatComponent } = setUp();

    expect(chatComponent).toBeDefined();
  });

  it.skip('should update state as characters are typed in the input', () => {
    const { chatComponent, props } = setUp();
    const chatInput = chatComponent.find('input');
    const submit = chatComponent.find('button');

    expect(chatComponent.props().addMessage).toHaveBeenCalledTimes(0);
    chatInput.simulate('change', { target: { value: 'Hello SpruceBot!'} });
    submit.simulate('click');
    expect(chatComponent.props().addMessage).toHaveBeenCalledTimes(1);
  });
});
