import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <section className='layout'>
    <video src='../static/ambient-background.mp4' autoPlay loop />
    <audio src='../static/ambiance.mp3' autoPlay loop/>
    <section className='container'>
      {children}
    </section>
    <style jsx>{`
      .layout {
        display: flex;
        height: 100vh;
        width: 100%;
      }

      video {
        height: 100%;
        object-fit: fill;
        width: 100%;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        height: 100vh;
        justify-content: center;
        position: absolute;
        width: 100%;
      }
    `}</style>
  </section>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
