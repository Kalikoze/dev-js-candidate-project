import React from 'react';
import Index from '../components/Index';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({watsonResponse: { response: ''}});

configure({ adapter: new Adapter() });

const setUp = () => {
  const wrapper = mount(
    <Provider store={fakeStore}>
      <Index />
    </Provider>
  );

  return { wrapper };
};

describe('Index page', () => {
  it('should render the Index page correctly with the right classes and styles', () => {
    const createNodeMock = (element) => {
      if (element.type === 'audio') {
        return {
          focus() {},
        };
      }
      return null;
    };

    const { wrapper } = setUp();

    const tree = renderer.create(wrapper, { createNodeMock }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    const { wrapper } = setUp();

    expect(wrapper).toBeDefined();
  });

  it('should have an empty array set to messages in state', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.state().messages).toEqual([]);
  });
});
