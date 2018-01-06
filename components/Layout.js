import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <section className='layout'>
    <video src='../static/ambient-background.mp4' autoPlay loop />
    <audio src='../static/ambiance.mp3' autoPlay loop/>
    <section className='container'>
      {children}
    </section>
  </section>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
