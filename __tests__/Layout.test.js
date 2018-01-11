import React from 'react';
import Layout from '../components/Layout';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Layout component', () => {
  it('should render the Layout correctly with the right classes and styles', () => {
    const tree = renderer.create(<Layout>
      <video src='../static/ambient-background.mp4' autoPlay loop />
      <section className='container'>
      </section>
    </Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have children as props', () => {
    const wrapper = mount(
      <Layout>
        <video src='../static/ambient-background.mp4' autoPlay loop />
        <section className='container'>
        </section>
      </Layout>
    );

    expect(wrapper.props()).toHaveProperty('children');
  });
});
