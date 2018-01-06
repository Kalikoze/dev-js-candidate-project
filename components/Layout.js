import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = ({ children }) => (
  <section className='layout'>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
    </Head>
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
