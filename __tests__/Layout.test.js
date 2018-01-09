import React from 'react';
import Layout from '../components/Layout';
import renderer from 'react-test-renderer';
// import 'jest-styled-components';

describe('Layout component', () => {
  it('should render the Layout correctly', () => {
    const tree = renderer.create(<Layout>
      <video src='../static/ambient-background.mp4' autoPlay loop />
      <section className='container'>
      </section>
    </Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
