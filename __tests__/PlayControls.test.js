import React from 'react';
import PlayControls from '../components/PlayControls';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('PlayControls component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PlayControls />);
  });

  it('should render the PlayControls correctly with the right classes and styles with a vaild ref', () => {
    const createNodeMock = (element) => {
      if (element.type === 'audio') {
        return {
          focus() {},
        };
      }
      return null;
    };

    const tree = renderer.create(wrapper, { createNodeMock }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('the state of isPlaying should toggle on click of Play/Pause', () => {
    expect(wrapper.state().isPlaying).toEqual(true);

    const button = wrapper.find('img').at(1);

    // Terminal error: Error: Not implemented: HTMLMediaElement.prototype.pause
    // Still passes test and changes state.
    button.simulate('click');
    expect(wrapper.state().isPlaying).toEqual(false);
    button.simulate('click');
    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it('should change track number in state depending on click of Fast-Forward or Rewind', () => {
    expect(wrapper.state().track).toEqual(1);

    const rewind = wrapper.find('img').at(0);
    const fastForward = wrapper.find('img').at(2);

    rewind.simulate('click');
    expect(wrapper.state().track).toEqual(4);
    fastForward.simulate('click');
    fastForward.simulate('click');
    fastForward.simulate('click');
    expect(wrapper.state().track).toEqual(3);
  });
});
